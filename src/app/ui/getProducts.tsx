'use client';

import { Product } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Cards } from "./card";

// This component renders a grid of products
export function GetProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        setProducts([]);
        const categoryId = searchParams.get('category') || '';

        const fetchProducts = async () => {
            const data = await fetch(`/api/products?categoryId=${categoryId}`);
            setProducts(await data.json());
        };
        // console.log(searchParams);
        fetchProducts();
    }, [searchParams]);

    return (
        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {products.map(product => (
                <Cards key={product.product_id} product={product} />
            ))}
        </div>
    );
}
