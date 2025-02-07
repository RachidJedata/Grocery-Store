import { Icon } from "@iconify/react";
export function GetProducts() {
    return (
        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

            <div className="col">
                <div className="product-item">
                    <span className="badge bg-success position-absolute m-3">-30%</span>
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-bananas.png" className="tab-image" alt="" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating items-center flex"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> <span>4.5</span></span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link text-[#b0b0b0]">Add to Cart</a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <span className="badge bg-success position-absolute m-3">-30%</span>
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-biscuits.png" className="tab-image" alt="" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-cucumber.png" className="tab-image" alt="" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-milk.png" className="tab-image" alt="" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img alt="" src="images/thumb-bananas.png" className="tab-image" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img alt="" src="images/thumb-biscuits.png" className="tab-image" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-cucumber.png" alt="" className="tab-image" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-milk.png" className="tab-image" alt="" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-bananas.png" className="tab-image" alt="" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="product-item">
                    <a href="#" className="btn-wishlist"><svg width="24" height="24"><use href="#heart"></use></svg></a>
                    <figure>
                        <a href="index.html" title="Product Title">
                            <img src="images/thumb-biscuits.png" className="tab-image" alt="" />
                        </a>
                    </figure>
                    <h3>Sunstar Fresh Melon Juice</h3>
                    <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use href="#star-solid"></use></svg> 4.5</span>
                    <span className="price">$18.00</span>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="input-group product-qty">
                            <span className="input-group-btn">
                                <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use href="#minus"></use></svg>
                                </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                            <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width="16" height="16"><use href="#plus"></use></svg>
                                </button>
                            </span>
                        </div>
                        <a href="#" className="nav-link">Add to Cart <Icon icon="uil:shopping-cart" /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}