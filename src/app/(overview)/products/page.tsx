import { searchForProducts } from "@/app/lib/action";
import { Card } from "@/app/ui/card";
import { Search } from "lucide-react";

export default async function Page({
    searchParams,
}: {
    searchParams: { search?: string, categoryId?: string };
}) {
    const query = searchParams.search?.trim() || '';
    let categoryId = Number(searchParams.categoryId?.trim());
    categoryId = isNaN(categoryId) ? 0 : categoryId;


    const getProducts = await searchForProducts(query, categoryId);
    return (<div className="grid md:grid-cols-4 sm:grid-cols-1">
        {getProducts.map(product => (
            <Card key={product.product_id} product={product} />
        ))}
    </div>);
}