'use server'

import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');

  try {
    const products = await prisma.product.findMany({
      where: categoryId ? { categoryId: Number(categoryId)} : undefined,
      take: 10,
      include: { category: true }
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}