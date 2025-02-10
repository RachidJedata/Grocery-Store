'use client'

import { Category } from "@prisma/client";
import { useEffect, useState } from "react";
import { searchType } from "../utils/types";
import Link from "next/link";
import { useDebouncedCallback } from 'use-debounce'


export function SearchInput({ categories }: { categories: Category[] }) {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [suggestedProducts, setSuggestedProducts] = useState<searchType[]>([]);

    const handleSearch = useDebouncedCallback((query) => {
        const fetchProductNames = async () => {
            const data = await fetch(`api/search?query=${query}&categoryId=${selectedCategory}`);
            setSuggestedProducts(await data.json());
        }
        fetchProductNames();
    }, 1000);

    return (
        <>
            <div className="col-md-4 d-none d-md-block">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="form-select border-0 bg-transparent">
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.category_id} value={category.category_id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="index.html" method="post">
                    <input
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => handleSearch(e.target.value)}
                        type="text"
                        className="form-control border-0 bg-transparent"
                        placeholder="Search for products"
                    />
                </form>
            </div>
            <div className={`w-2/5 bg-slate-400 divide-y rounded-lg transition duration-500 h-96 absolute top-20 z-10 ${isFocused ? 'block' : 'hidden'
                }`} >
                {suggestedProducts.map(product => (
                    <div className="block py-2" key={product.product_id}>
                        <Link className="hover:text-slate-100 hover:underline transition" href={`product/${product.product_id}`}>{product.product_name}</Link>
                    </div>
                ))}
            </div>
        </>
    );
}
export function SearchInputMobile() {
    const [suggestedProducts, setSuggestedProducts] = useState<searchType[]>([]);

    const handleSearch = useDebouncedCallback((query) => {
        const fetchProductNames = async () => {
            const data = await fetch(`api/search?query=${query}`);
            setSuggestedProducts(await data.json());
        }
        fetchProductNames();
    }, 1000);

    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasSearch" aria-labelledby="Search">
            <div className="offcanvas-header justify-content-center">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="grid grid-cols-1 gap-2 bg-lime">
                <div>
                    <span className="text-primary">Search</span>
                    <form role="search" action="index.html" method="get" className="d-flex gap-0">
                        <input
                            onChange={(e) => handleSearch(e.target.value)}
                            className="form-control rounded-start rounded-0 bg-light"
                            type="text" placeholder="What are you looking for?"
                            aria-label="What are you looking for?" />
                        <button className="btn btn-dark rounded-end rounded-0"
                            type="submit">Search</button>
                    </form>
                </div>
                <div className="w-full divide-y-2 h-[400]">
                    {suggestedProducts.map(product => (
                        <div className="block pl-2 py-2" key={product.product_id}>
                            <Link className="hover:text-orange-900 hover:underline transition" href={`product/${product.product_id}`}>{product.product_name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}