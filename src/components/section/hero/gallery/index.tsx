import { useState, useRef, useEffect } from "react";
import { useProductContext } from "@/hooks/use-product";
import BlackArrow from "@/icons/black-arrow";

const Gallery = () => {
  const { currentProduct } = useProductContext();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelect = () => {
      setSelectedImageIndex(0);
    };
    handleSelect();
  }, [currentProduct]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } =
      scrollContainerRef.current;

    setShowTopButton(scrollTop > 0);

    setShowBottomButton(scrollTop < scrollHeight - clientHeight - 5);
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex gap-4">
      <div className="hidden md:flex flex-col items-center gap-2">
        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="h-8 cursor-pointer"
            aria-label="Scroll to top"
          >
            <BlackArrow className="size-3 rotate-180" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex flex-col gap-2 overflow-y-auto max-h-182.5 scrollbar-hide "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {currentProduct.images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-24 h-26 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                selectedImageIndex === index
                  ? "border-main-red"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${currentProduct.name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {showBottomButton && (
          <button
            onClick={scrollToBottom}
            className="h-8 cursor-pointer"
            aria-label="Scroll to bottom"
          >
            <BlackArrow className="size-3" />
          </button>
        )}
      </div>

      <div className="flex-1">
        <div className="hidden md:block">
          <img
            src={
              currentProduct.images[selectedImageIndex] ||
              currentProduct.thumbnail
            }
            alt={currentProduct.name}
            className="rounded-lg aspect-square w-full object-cover"
          />
        </div>

        <div className="md:hidden">
          <img
            src={
              currentProduct.images[selectedImageIndex] ||
              currentProduct.thumbnail
            }
            alt={`${currentProduct.name} ${selectedImageIndex + 1}`}
            className="rounded-lg aspect-square w-full object-cover"
          />

          <div className="flex justify-center gap-2 mt-4">
            {currentProduct.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  selectedImageIndex === index
                    ? "bg-main-dark-red"
                    : "bg-main-light-red"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
