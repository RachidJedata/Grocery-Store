// backend/types.ts
import { Ads } from "@prisma/client";

// Create a type that includes both Ads and Product
export type AdWithDiscount = Ads & { product: { discount: string | null } };
export type searchType = { product_name: string, product_id: string };