import Image from "next/image";
import prisma from "../lib/prisma";
import Link from "next/link";

export async function NewlyArrivedBrands() {
    const products = await prisma.product.findMany({
        orderBy: {
            dateAdded: 'desc'
        },
        take: 11
    });
    return (
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">New Arrived Brands</h2>

                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                                <div className="swiper-buttons">
                                    <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                                    <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="category-carousel swiper">
                            <div className="swiper-wrapper">
                                {products.map(product => (
                                    <Link
                                        href={`/product/${product.product_id}`} // Replace with actual product link
                                        key={product.product_id} // Adding a key for React list rendering
                                        className="relative nav-link h-44 flex category-item swiper-slide"
                                    >
                                        {product.discount > 0 && (
                                            <span className="absolute top-2 left-2 badge bg-success position-absolute m-3" >{product.discount.toString()}%</span>
                                        )}
                                        <Image
                                            width={90}
                                            height={90}
                                            src={`/${product.imageUrl}`}
                                            alt={product.product_name}
                                            className="img-fluid" // Ensure the image is responsive
                                        />
                                        <h3 className="category-title">{product.product_name}</h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}