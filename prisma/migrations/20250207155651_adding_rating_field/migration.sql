/*
  Warnings:

  - Made the column `user_created_product_id` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_user_created_product_id_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "rating" DECIMAL(65,30) DEFAULT 0,
ALTER COLUMN "user_created_product_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_user_created_product_id_fkey" FOREIGN KEY ("user_created_product_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
