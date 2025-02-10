'use server'

import prisma from '@/app/lib/prisma';
import { Category, Prisma, Product } from '@prisma/client';
import { searchType } from '../utils/types';

export async function getCategories() {
    return await prisma.category.findMany();
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
export async function getProductsByCategory(categoryId?: string | number) {
    return await prisma.product.findMany({
        ...(categoryId ? { where: { categoryId: Number(categoryId) } } : {})
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
export async function searchForProducts(query: string, categoryId?: number) {
    // Validate query exists and is at least 2 characters
    if (!query || query.trim().length < 2) {
        return [];
    }

    // Use Prisma.sql for safe SQL template tagging
    const categoryCondition = categoryId
        ? Prisma.sql`AND p."categoryId" = ${categoryId}`
        : Prisma.empty;

    try {
        return await prisma.$queryRaw<searchType[]> `
            SELECT 
                p.product_id, 
                p.product_name 
            FROM "Product" p
            JOIN "User" u ON u.user_id = p.user_created_product_id
            WHERE (
                p.product_name ILIKE ${`%${query}%`} 
                OR u.name ILIKE ${`%${query}%`}
            )
            ${categoryCondition}
            LIMIT 9
        `;
    } catch (error) {
        console.error("Search query failed:", error);
        throw new Error("Failed to execute product search");
    }
}

// export async function getProducs({ query }: { query?: string }) {
//     prisma.$queryRaw<Product[]> `
//     SELECT * FROM p.* FROM "Products" p
//     JOIN "Category" ON "category_id" = p.categoryId,
//     JOIN "User" u ON u.name = ${query}
//     WHERE "product_name" LIKE '%${query}%'
//     OR
//     `;
// }