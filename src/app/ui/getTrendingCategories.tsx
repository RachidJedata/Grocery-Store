'use client';

import { Category } from "@prisma/client";
import clsx from "clsx";
import { useSearchParams, useRouter } from "next/navigation";

export default function GetTrendingCategories({ categories }: { categories: Category[] }) {
    // Call hooks at the top level of the component
    const router = useRouter();
    const searchParams = useSearchParams();
    const categoryActive = searchParams.get('category') || '';

    const handleParams = (categoryId: number | string) => {
        // Convert searchParams to string and create a new URLSearchParams instance
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', categoryId.toString());
        // Replace the URL with the new search params.
        // It's a good idea to prefix with "?" to denote the query string.
        router.replace(`?${params.toString()}#trending-products`);
    };

    return (
        <div id="trending-products" className="tabs-header d-flex justify-content-between border-bottom my-5">
            <h3>Trending Products</h3>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        // className={`nav-link text-uppercase fs-6 ${categoryActive === '' && 'active'}`}
                        className={clsx('nav-link text-uppercase fs-6', {
                            'active': categoryActive === ''
                        })}
                        id="nav-all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-all"
                        onClick={() => {
                            router.replace(`?#trending-products`);
                        }}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.category_id}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default link navigation
                                handleParams(category.category_id);
                            }}
                            // className={`nav-link text-uppercase fs-6 ${categoryActive === category.category_id.toString() && 'active'}`}
                            className={clsx('nav-link text-uppercase fs-6', {
                                'active': categoryActive === category.category_id.toString()
                            })}
                            id={`nav-category-${category.category_id}-tab`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
}
