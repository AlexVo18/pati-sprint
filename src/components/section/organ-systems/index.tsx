import type { ProductType } from "@/types/organ-systems.type";
import { useEffect, useState } from "react";
import { organSystemsData } from "./mock-data";
import Background from "./background";
import Toggle from "./toggle";
import Header from "./header";
import Card from "./card";
import Detail from "./detail";

const OrganSystems = () => {
  const [activeProduct, setActiveProduct] = useState<ProductType>("essentials");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const currentData = organSystemsData[activeProduct];
  const currentSystem = currentData.systems[activeIndex];

  const handleProductToggle = (product: ProductType) => {
    setActiveProduct(product);
    setActiveIndex(0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { rootMargin: "50px", threshold: 0.1 },
    );

    const section = document.getElementById("organ-systems-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const isLongevity = activeProduct === "longevity";

  return (
    <section
      id="organ-systems-section"
      data-active-product={activeProduct}
      className={`organ-systems relative py-20 lg:py-[120px_0_160px] overflow-hidden transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] contain-[layout_style]
        ${isVisible ? "is-visible" : ""}
        ${isLongevity ? "organ-systems--longevity" : "organ-systems--essentials"}`}
    >
      <Background />

      <div className="relative z-10 max-w-350 mx-auto px-5 md:px-10 lg:px-15 contain-[layout]">
        <Toggle
          activeProduct={activeProduct}
          onToggle={handleProductToggle}
        />

        <div className="organ-systems__content organ-systems__content--active animate-osContentFadeIn">
          <Header
            eyebrow={currentData.eyebrow}
            title={currentData.title}
            subtitle={currentData.subtitle}
            product={activeProduct}
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(320px,440px)_1fr] lg:gap-12 xl:gap-16 lg:items-start">
            <div
              className={`grid gap-3 md:gap-4 ${
                isLongevity ? "grid-cols-2 lg:grid-rows-2" : "grid-cols-3"
              }`}
              role="listbox"
              aria-label={`Select ${isLongevity ? "a cellular benefit" : "an organ system"}`}
            >
              {currentData.systems.map((system) => (
                <Card
                  key={system.id}
                  system={system}
                  isActive={activeIndex === system.index}
                  onClick={() => setActiveIndex(system.index)}
                  product={activeProduct}
                />
              ))}
            </div>

            <div className="order-first lg:order-last" aria-live="polite">
              <Detail system={currentSystem} product={activeProduct} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganSystems;
