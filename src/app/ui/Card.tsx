import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MouseEvent } from "react";

export function Cards({ product }: { product: Product }) {
    const [inputValue, setInputValue] = useState<number>(1);

    const changeValue = (e: MouseEvent<HTMLButtonElement>, add = false) => {
        e.preventDefault();
        setInputValue((prevValue) => {
            if (add && prevValue >= product.quantity) return prevValue; // Empêcher d'aller au-delà de la quantité max
            if (!add && prevValue <= 1) return prevValue; // Empêcher d'aller en dessous de 1
            return add ? prevValue + 1 : prevValue - 1;
        });
        

        // alert(inputValue);
    };

    return (
        <>
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
                        <Link href={`/products/${product.product_id}`}>
                            <Image
                                width={200}
                                height={200}
                                src={`/${product.imageUrl}`}
                                className="tab-image"
                                alt={product.product_name}
                            ></Image>
                        </Link>
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
                        <div className="input-group flex items-center product-qty">
                            <span className="input-group-btn">
                                <button
                                    type="button"
                                    onClick={(e) => { changeValue(e) }}
                                    className="quantity-left-minus btn btn-danger btn-number"
                                >
                                    <svg width="16" height="16">
                                        <use href="#minus"></use>
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="text"
                                className="form-control input-number w-2"
                                value={inputValue}
                                readOnly
                            />
                            <span className="input-group-btn">
                                <button
                                    onClick={(e) => { changeValue(e, true); }}
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
        </>

    );
}