import { getProduct, getProductsByCategory } from "@/app/lib/action";
import { Card } from "@/app/ui/Card";
import Image from "next/image";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const product = await getProduct(id);
    const relatedProducts = (await getProductsByCategory(product.categoryId, 4))
        .filter(p => p.product_id !== product.product_id);

    function QuantitySelect({ quantity }: { quantity: number }) {
        const options = [];
        for (let i = 1; i <= quantity; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return <select id="quantity" className="rounded-md border-gray-300 p-2 pr-7">{options}</select>;
    }

    return (
        <>
            <section className="flex-1 py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            {/* <!-- Product Image --> */}
                            <div className="space-y-4">
                                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                                    <Image width={600} height={600} src={`/${product.imageUrl}`} alt={product.product_name} className="w-full h-full object-center object-cover" />
                                </div>
                                {/* <div className="grid grid-cols-4 gap-4">
                                    <button className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                                        <img src="/placeholder.svg?height=150&width=150" alt="Product thumbnail" className="w-full h-full object-center object-cover" />
                                    </button>
                                    <button className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                                        <img src="/placeholder.svg?height=150&width=150" alt="Product thumbnail" className="w-full h-full object-center object-cover" />
                                    </button>
                                    <button className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                                        <img src="/placeholder.svg?height=150&width=150" alt="Product thumbnail" className="w-full h-full object-center object-cover" />
                                    </button>
                                    <button className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                                        <img src="/placeholder.svg?height=150&width=150" alt="Product thumbnail" className="w-full h-full object-center object-cover" />
                                    </button>
                                </div> */}
                            </div>

                            {/* <!-- Product Details --> */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold text-gray-900">{product.product_name}</h1>
                                    <p className="text-lg text-gray-500">{product.category.name}</p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <span className="text-3xl font-bold text-gray-900">${(product.price - (product.price * product.discount / 100)).toFixed(2)}</span>
                                    {product.discount > 0 && (
                                        <>
                                            <span className="text-lg text-gray-500 line-through">${product.price}</span>
                                            <span className="px-3 py-1 text-sm text-green-600 bg-green-100 rounded-full">Save {product.discount}%</span>
                                        </>
                                    )}
                                </div>

                                {/* <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-gray-900">Description</h3>
                                    <p className="text-gray-600">
                                        {product.}
                                    </p>
                                </div> */}

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity</label>
                                        <QuantitySelect quantity={product.quantity} />
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <button className="flex-1 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">
                                        Add to Cart
                                    </button>
                                    <button className="px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Suggested Products Section --> */}
            <div className="space-y-8">
                <h2 className="text-3xl px-4 pt-3 font-bold text-gray-900">You May Also Like</h2>

                {/* Horizontal scroll container */}
                <div className="flex overflow-x-auto pb-4 px-4 scrollbar-hide">
                    <div className="flex mx-auto flex-nowrap gap-6">
                        {relatedProducts.map(product => (
                            <div
                                key={product.product_id}
                                className="flex-shrink-0 w-[300px]"  // Prevent card squishing and set width
                            >
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}