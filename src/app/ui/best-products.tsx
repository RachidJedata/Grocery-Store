import { Product } from "@prisma/client";

export function BestProducts({ products }: { products: Product[] }) {
    return (
        <>
            {products.map(product => (
                <div key={product.product_id} className="product-item swiper-slide">
                    {/* Discount Badge - Only show if discount exists */}
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
                        <a href={`/product/${product.product_id}`}>
                            <img
                                src={product.imageUrl}
                                className="tab-image"
                                alt={product.product_name}
                            />
                        </a>
                    </figure>

                    {/* Product Details */}
                    <h3>{product.product_name}</h3>
                    <span className="qty">{product.quantity} Unit{product.quantity !== 1 ? 's' : ''}</span>
                    <span className="rating">
                        <svg width="24" height="24" className="text-primary">
                            <use href="#star-solid"></use>
                        </svg>
                        {product.rating || 4.5}
                    </span>

                    {/* Price Display */}
                    <span className="price">
                        ${(product.price - (product.price * product.discount / 100)).toFixed(2)}
                        {product.discount > 0 && (
                            <span className="text-muted ms-2 text-decoration-line-through">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </span>

                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button
                                    type="button"
                                    className="quantity-left-minus btn btn-danger btn-number"
                                >
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
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
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <button className="btn btn-outline-secondary">
                                Add to Cart
                            </button>
                    </div>
                </div>
            ))}
        </>
    );
}