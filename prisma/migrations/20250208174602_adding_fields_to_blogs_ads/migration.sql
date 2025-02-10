/*
  Warnings:

  - The values [ad4,ad5] on the enum `Location` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `imageUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Location_new" AS ENUM ('ad1', 'ad2', 'ad3');
ALTER TABLE "Ads" ALTER COLUMN "location" DROP DEFAULT;
ALTER TABLE "Ads" ALTER COLUMN "location" TYPE "Location_new" USING ("location"::text::"Location_new");
ALTER TYPE "Location" RENAME TO "Location_old";
ALTER TYPE "Location_new" RENAME TO "Location";
DROP TYPE "Location_old";
ALTER TABLE "Ads" ALTER COLUMN "location" SET DEFAULT 'ad1';
COMMIT;

-- AlterTable
ALTER TABLE "Ads" ADD COLUMN     "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expired" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "imageUrl" TEXT NOT NULL;
