import { useState } from "react";
import Background from "./background";
import { ProductToggle } from "./product-toggle";
import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Cards from "./cards";
import type { ProductType } from "@/types/pillars.type";
import { FEATURE_CARDS, PILLARS_DATA } from "./mock-data";

const Pillars = () => {
  const [activeProduct, setActiveProduct] = useState<ProductType>("essentials");
  const [activePillar, setActivePillarState] = useState<
    Record<ProductType, number>
  >({
    essentials: 0,
    longevity: 0,
  });
  const isEssentials = activeProduct === "essentials";
  const currentPillars = PILLARS_DATA[activeProduct];
  const currentActivePillarIndex = activePillar[activeProduct];
  const currentPillar = currentPillars[currentActivePillarIndex];
  const currentFeatures = FEATURE_CARDS[activeProduct];

  const setActivePillar = (product: ProductType, index: number) => {
    setActivePillarState((prev) => ({
      ...prev,
      [product]: index,
    }));
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "100px 0 100px",
        background: isEssentials
          ? "repeating-linear-gradient(0deg, transparent 0px, transparent 70px, rgba(164, 0, 17, 0.03) 70px, rgba(164, 0, 17, 0.03) 71px), repeating-linear-gradient(90deg, transparent 0px, transparent 70px, rgba(164, 0, 17, 0.02) 70px, rgba(164, 0, 17, 0.02) 71px), linear-gradient(180deg, #F5EAEA 0%, #FFFDF5 15%, #FFF5F5 40%, #F5EAEA 70%, rgba(164, 0, 17, 0.04) 100%)"
          : "repeating-linear-gradient(0deg, transparent 0px, transparent 70px, rgba(180, 140, 30, 0.07) 70px, rgba(180, 140, 30, 0.07) 71px), repeating-linear-gradient(90deg, transparent 0px, transparent 70px, rgba(180, 140, 30, 0.05) 70px, rgba(180, 140, 30, 0.05) 71px), linear-gradient(180deg, #FAF7EE 0%, #FFFDF5 15%, #F8F4E8 40%, #FAF7EE 70%, rgba(231, 141, 45, 0.08) 100%)",
        marginTop: "-1px",
      }}
      id="pillars-health-section"
      data-active-product={activeProduct}
    >
      <Background isEssentials={isEssentials} />

      <div className="relative z-1 max-w-350 mx-auto px-5 md:px-10 xl:px-15">
        <ProductToggle
          isEssentials={isEssentials}
          setActiveProduct={setActiveProduct}
        />
        <Header isEssentials={isEssentials} />

        <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-10 xl:grid-cols-[420px_1fr] xl:gap-14 mb-16 lg:mb-20">
          <Navigation
            pillars={currentPillars}
            activePillar={activePillar}
            activeProduct={activeProduct}
            setActivePillar={setActivePillar}
            isEssentials={isEssentials}
          />
          <Content pillar={currentPillar} isEssentials={isEssentials} />
        </div>

        <Cards cards={currentFeatures} isEssentials={isEssentials} />
      </div>
    </section>
  );
};

export default Pillars;
