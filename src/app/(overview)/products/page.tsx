import { searchForProducts } from "@/app/lib/action";
import { Card } from "@/app/ui/Card";
import Link from "next/link";

export default async function Page({
    searchParams,
}: {
    searchParams: { search?: string, categoryId?: string, page?: string };
}) {
    const query = searchParams.search?.trim() || '';
    let categoryId = Number(searchParams.categoryId?.trim());
    categoryId = isNaN(categoryId) ? 0 : categoryId;

    // Pagination Variables
    const limit = 9; // Number of products per page
    const page = Number(searchParams.page) || 1;
    const offset = (page - 1) * limit; // Calculate offset for database query


    // Fetch paginated products
    const { products, totalProductsCount } = await searchForProducts(query, categoryId, limit, offset);
    // Calculate total pages
    const totalPages = Math.ceil(totalProductsCount / limit);

    return (
        <div>
            {/* Products Grid */}
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
                {products.map((product) => (
                    <Card key={product.product_id} product={product} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-4 mt-6">
                {page > 1 && (
                    <Link
                        href={`?search=${query}&categoryId=${categoryId}&page=${page - 1}`}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        Previous
                    </Link>
                )}

                <span className="px-4 py-2 bg-gray-300 rounded">Page {page} of {totalPages}</span>

                {page < totalPages && (
                    <Link
                        href={`?search=${query}&categoryId=${categoryId}&page=${page + 1}`}
                        className="px-4 py-2 bg-gray-200 rounded"
                    >
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}