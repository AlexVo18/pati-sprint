import { createContext } from "react";
import type { ProductType, SupplyType } from "@/types/hero.type";

export interface ProductContextType {
  currentProduct: ProductType;
  currentSupply: SupplyType;
  selectProduct: (index: number) => void;
  selectSupply: (index: number) => void;
  products: ProductType[];
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);
