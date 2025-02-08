-- CreateTable
CREATE TABLE "Ads" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "Ads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
