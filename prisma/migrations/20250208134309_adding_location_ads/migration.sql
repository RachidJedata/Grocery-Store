-- CreateEnum
CREATE TYPE "Location" AS ENUM ('ad1', 'ad2', 'ad3', 'ad4', 'ad5');

-- AlterTable
ALTER TABLE "Ads" ADD COLUMN     "location" "Location" NOT NULL DEFAULT 'ad1';
