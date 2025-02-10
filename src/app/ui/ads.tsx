'use client'

import { useState, useEffect } from "react";
import { AdWithDiscount } from "../utils/types";
import Image from "next/image";
import { ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/ui/carousel"
import Link from "next/link";

const getDataBack = (ad: string) => {
    const [ads, setAds] = useState<AdWithDiscount[]>([]);

    useEffect(() => {
        fetch(`/api/ads?ad_location=${ad}`)
            .then(response => response.json())
            .then(data => setAds(data))
            .catch(error => console.error("Error fetching ads:", error));
    }, []);
    return ads;
}

export function Ad1() {

    const [api, setApi] = useState<any>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const ads = getDataBack('ad1');
    return (
        <>
            <Carousel className="relative" setApi={setApi}>
                <CarouselContent>
                    {ads.map((ad, index) => (
                        <CarouselItem key={index}>
                            <div className="bg-[#EDF6FF] rounded-2xl p-8 md:p-12 overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="space-y-6 relative">
                                        {Number(ad.product.discount) > 0 && (<span className="text-amber-500 text-2xl font-bold">{ad.product.discount}% Off</span>)}
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{ad.title}</h1>
                                        <p className="text-gray-600">{ad.description}</p>
                                        <Link href={`/product/${ad.productId}`} className="absolute px-6 border-2 py-2 rounded-xl bg-slate-300 hover:bg-slate-50 transition-colors">
                                            SHOP NOW
                                        </Link>
                                    </div>
                                    <div className="relative h-[400px]">
                                        <Image
                                            src={`/${ad.ImageUrl}`}
                                            alt="Product Image"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Custom Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {ads.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${current === index ? "bg-amber-500" : "bg-gray-300"}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <CarouselPrevious className="absolute left-4 top-1/2" />
                <CarouselNext className="absolute right-4 top-1/2" />
            </Carousel>

        </>
    );
}

export function Ad2() {

    const ads = getDataBack('ad2');
    return (
        <div className="grid grid-cols-2 gap-4">
            {ads.map((ad,index) => (
                <div key={index} className="bg-[#F5F9F0]  rounded-2xl p-8 space-y-4">
                    <div className="space-y-1">
                        {Number(ad.product.discount) > 0 && (<h2 className="text-3xl font-bold text-gray-900">{ad.product.discount}% Off</h2>)}
                    </div>
                    <div className="flex justify-between items-start">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-gray-900">{ad.title}</h3>
                            <Link href={`/product/${ad.productId}`} className="flex items-center text-gray-600 hover:text-gray-900">
                                Shop Collection <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                        <div className="relative w-32 h-32">
                            <Image
                                src={`/${ad.ImageUrl}`}
                                alt="Fruits and Vegetables"
                                width={100}
                                height={100}
                                className="object-cover pb-96"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export function Ad3() {
    const ads = getDataBack('ad3');
    return (
        <div className="grid grid-cols-2 gap-4">
            {ads.map((ad,index) => (
                <div key={index} className="banner-ad bg-danger flex items-center mb-3 relative overflow-hidden h-[300px]">
                {/* Text Content */}
                <div className="banner-content p-5 z-10 max-w-[60%]">
                  {/* Discount Badge */}
                  {Number(ad.product?.discount) > 0 && (
                    <div className="categories text-primary fs-3 fw-bold mb-2">
                      Upto {ad.product.discount}% Off
                    </div>
                  )}
              
                  {/* Title */}
                  <h3 className="banner-title text-2xl font-bold mb-2">{ad.title}</h3>
              
                  {/* Description */}
                  {ad.description && (
                    <p className="text-sm mb-4">{ad.description}</p>
                  )}
              
                  {/* Call-to-Action Button */}
                  <Link
                    href={`/product/${ad.productId}`}
                    className="btn btn-dark text-uppercase px-6 py-2"
                  >
                    Shop Now
                  </Link>
                </div>
              
                {/* Image */}
                <Image
                  src={`/${ad.ImageUrl}`}
                  alt="Product Image"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            ))}
        </div>
    );
}
