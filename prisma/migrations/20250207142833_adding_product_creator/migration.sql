-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "user_created_product_id" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVendor" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_user_created_product_id_fkey" FOREIGN KEY ("user_created_product_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
