import { ProductContext } from "@/context/product-context";
import { useContext } from "react";

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
