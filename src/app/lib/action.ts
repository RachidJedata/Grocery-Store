'use server'

import prisma from '@/app/lib/prisma';
import { Category, Prisma, Product } from '@prisma/client';

export async function getCategories() {
    return await prisma.category.findMany();
}

export async function getProduct(id: string) {
    return await prisma.product.findFirstOrThrow({
        include: {
            category: {
                select: {
                    name: true,

                }
            }
        },
        where: {
            product_id: id
        }
    })
}

export async function getTrendingCategories() {
    return await prisma.$queryRaw<Category[]>`
    SELECT c.*
    FROM "Category" c
    JOIN "Product" p ON c.category_id = p."categoryId"
    GROUP BY c.category_id
    ORDER BY SUM(p.nbre_bought) ASC
    LIMIT 2;
`;
}
export async function getProductsByCategory(categoryId?: string | number, limit?: number) {
    return await prisma.product.findMany({
        ...(categoryId ? { where: { categoryId: Number(categoryId) } } : {}),
        ...(limit ? { take: limit } : {})
    })
}

export async function getBestProducts() {
    return await prisma.product.findMany(
        {
            orderBy: {
                nbre_bought: 'asc'
            },
            take: 7
        }
    )
}
const ALLOWED_PRODUCT_FIELDS = new Set([
    "product_id",              // Unique identifier for the product (UUID)
    "product_name",            // Name of the product
    "price",                   // Price of the product
    "imageUrl",                // URL of the product image
    "dateAdded",               // Timestamp of when the product was added
    "discount",                // Discount applied to the product
    "quantity",                // Available quantity of the product
    "rating",                  // Product rating (nullable, default is 0)
    "nbre_bought",             // Number of times the product has been bought
    "categoryId",              // Foreign key to Category table
    "user_created_product_id"  // Foreign key for the product creator (mapped column)
]);

export async function getLatestBlogs() {
    return await prisma.blog.findMany({
        include: {
            category: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            dateCreated: 'desc'
        },
        take: 3
    })
}
export async function searchForProducts(query: string, categoryId?: number, limit?: number, offset?: number, fields?: string[]) {

    // Use Prisma.sql for safe SQL template tagging
    const categoryCondition = categoryId
        ? Prisma.sql`AND p."categoryId" = ${categoryId}`
        : Prisma.empty;

    // Add a leading space in the LIMIT clause fragment.
    const limitCondition =
        limit && limit > 0
            ? Prisma.sql` LIMIT ${limit} OFFSET ${offset}`
            : Prisma.empty;

    // If custom fields are provided, validate and build the select clause.
    let selectClause = 'p.*';
    if (fields && fields.length > 0) {
        // Validate each field against allowed fields
        const sanitizedFields = fields.filter((field) => ALLOWED_PRODUCT_FIELDS.has(field));
        if (sanitizedFields.length === 0) {
            throw new Error("No valid fields provided for selection.");
        }
        selectClause = sanitizedFields.join(", ");
    }

    try {
        const products = await prisma.$queryRaw<Product[]> `
            SELECT ${Prisma.raw(selectClause)}
            FROM "Product" p
            JOIN "User" u ON u.user_id = p.user_created_product_id
            WHERE (
                p.product_name ILIKE '%' || ${query.trim()} || '%' 
                OR u.name ILIKE '%' || ${query.trim()} || '%'
            )
            ${categoryCondition}
            ${limitCondition}
            
        `;
        const totalProductsCount = await prisma.$queryRaw<{ count: number }[]>`
            SELECT COUNT(p.*)
            FROM "Product" p
            JOIN "User" u ON u.user_id = p.user_created_product_id
            WHERE (
                p.product_name ILIKE '%' || ${query.trim()} || '%' 
                OR u.name ILIKE '%' || ${query.trim()} || '%'
            )
            ${categoryCondition}
        `;
        return {
            products,
            totalProductsCount: Number(totalProductsCount[0].count || 0)
        }
    } catch (error) {
        console.error("Search query failed:", error);
        throw new Error("Failed to execute product search");
    }
}