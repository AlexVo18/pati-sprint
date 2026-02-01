import { products } from "@/components/section/hero/mock-data";
import { useState } from "react";
import { ProductContext, type ProductContextType } from ".";

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSupplyIndex, setSelectedSupplyIndex] = useState(0);

  const selectProduct = (index: number) => {
    if (index >= 0 && index < products.length) {
      setSelectedIndex(index);
      setSelectedSupplyIndex(0);
    }
  };

  const selectSupply = (index: number) => {
    const currentProduct = products[selectedIndex];
    if (index >= 0 && index < currentProduct.supplies.length) {
      setSelectedSupplyIndex(index);
    }
  };

  const value: ProductContextType = {
    currentProduct: products[selectedIndex],
    currentSupply: products[selectedIndex].supplies[selectedSupplyIndex],
    selectProduct,
    selectSupply,
    products,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
