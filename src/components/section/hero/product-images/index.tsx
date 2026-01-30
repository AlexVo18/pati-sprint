import {
  MD_IMAGES_LENGTH,
  productAdImgs,
  productEffImgs,
  saleBadgeImg,
} from "../mock-data";
import Image from "@/components/common/image";
import NutritionModal from "../nutrition-modal";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductImages = () => {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const sliceImgs = productAdImgs.slice(0, MD_IMAGES_LENGTH);

  useEffect(() => {
    if (!api) return;

    const selectSnap = () => {
      setCurrent(api.selectedScrollSnap());
    };

    selectSnap();
    api.on("select", () => {
      selectSnap();
    });
  }, [api]);

  useEffect(() => {
    if (!api || !thumbApi) return;

    const syncThumbnail = () => {
      const selected = api.selectedScrollSnap();
      thumbApi.scrollTo(selected);
    };

    api.on("select", syncThumbnail);
  }, [api, thumbApi]);

  useEffect(() => {
    if (!api || !thumbApi) return;

    const syncMain = () => {
      const selected = thumbApi.selectedScrollSnap();
      api.scrollTo(selected);
    };

    thumbApi.on("select", syncMain);
  }, [api, thumbApi]);

  const goToImage = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <>
      <div className="md:grid hidden gap-4 grid-cols-6 ">
        {sliceImgs.map((img, index) => (
          <div
            key={index}
            className={cn(
              "relative",
              index === 0 && "col-span-6",
              index > 0 && index < 3 && "col-span-3",
              index >= 3 && "col-span-2"
            )}
          >
            <Image src={img} alt={"Image-" + (index + 1)} loading="eager" />
            {index === 0 ? (
              <div className="absolute top-4 right-4 max-w-30">
                <img src={saleBadgeImg} alt="sale-badge" />
              </div>
            ) : null}
            {index === 0 ? (
              <div className="absolute bottom-8 w-full flex justify-center">
                <NutritionModal />
              </div>
            ) : null}
          </div>
        ))}
        {productEffImgs.map((img, index) => (
          <div key={index} className="col-span-3">
            <Image src={img} alt={"Effect-" + (index + 1)} loading="eager" />
          </div>
        ))}
      </div>

      <div className="md:hidden block ">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="relative mb-2"
        >
          <CarouselContent>
            {productAdImgs.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative overflow-hidden rounded-md">
                  {index === 0 && (
                    <div className="absolute top-4 right-4 z-10">
                      <img
                        src={saleBadgeImg}
                        alt="sale-badge"
                        className="size-20"
                      />
                    </div>
                  )}
                  <div className="relative aspect-square">
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {index === 0 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                      <NutritionModal />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-6 bg-white/10 text-white border-2" />
          <CarouselNext className="right-6 bg-white/10 text-white border-2" />
        </Carousel>

        <Carousel
          setApi={setThumbApi}
          opts={{
            loop: true,
            align: "start",
            skipSnaps: false,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {productAdImgs.map((image, index) => (
              <CarouselItem key={index} className={cn("pl-2 basis-1/4")}>
                <button
                  onClick={() => goToImage(index)}
                  className={cn(
                    "relative aspect-square rounded-lg overflow-hidden transition-all ",
                    current && ""
                  )}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default ProductImages;
