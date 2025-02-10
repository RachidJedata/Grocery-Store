import { searchForProducts } from "@/app/lib/action";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const categoryId = Number(searchParams.get('categoryId')) || 0;

    if (!query) return NextResponse.json([]);
    const data = await searchForProducts(query, categoryId);
    return NextResponse.json(data);

}