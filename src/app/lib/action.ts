import prisma from '@/app/lib/prisma';
import { Category } from '@prisma/client';

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
export async function getProducs({ query }: { query?: string }) {
    return query;
}