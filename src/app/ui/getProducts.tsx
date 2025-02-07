'use client';

import { Product } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

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
            {products.map((product) => (
                <div key={product.product_id} className="col">
                    <div className="product-item">
                        {/* Discount Badge */}
                        {product.discount > 0 && (
                            <span className="badge bg-success position-absolute m-3">
                                -{product.discount}%
                            </span>
                        )}

                        {/* Wishlist Button */}
                        <button className="btn-wishlist">
                            <svg width="24" height="24">
                                <use href="#heart"></use>
                            </svg>
                        </button>

                        {/* Product Image */}
                        <figure>
                            <a href={`/products/${product.product_id}`}>
                                <img
                                    src={product.imageUrl}
                                    className="tab-image"
                                    alt={product.product_name}
                                />
                            </a>
                        </figure>

                        {/* Product Details */}
                        <h3>{product.product_name}</h3>
                        <span className="qty">{product.quantity} Units available</span>

                        {/* Price Section */}
                        <span className="price">
                            ${(product.price - (product.price * product.discount / 100)).toFixed(2)}
                            {product.discount > 0 && (
                                <span className="text-muted ms-2 text-decoration-line-through">
                                    ${product.price.toFixed(2)}
                                </span>
                            )}
                        </span>

                        {/* Quantity Selector */}
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div className="input-group product-qty">
                                <span className="input-group-btn">
                                    <button
                                        type="button"
                                        className="quantity-left-minus btn btn-danger btn-number"
                                    >
                                        <svg width="16" height="16">
                                            <use href="#minus"></use>
                                        </svg>
                                    </button>
                                </span>
                                <input
                                    type="text"
                                    className="form-control input-number"
                                    value="1"
                                    readOnly
                                />
                                <span className="input-group-btn">
                                    <button
                                        type="button"
                                        className="quantity-right-plus btn btn-success btn-number"
                                    >
                                        <svg width="16" height="16">
                                            <use href="#plus"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>

                            {/* Add to Cart */}
                            <button className="btn btn-outline-secondary">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
