import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { leftArrowIcon, playButton, promoVideos } from "../mock-data";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const StoriesCarousel = () => {
  const [currentStart, setCurrentStart] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [itemPlaying, setItemPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const maxStartIndex = promoVideos.length - 4;

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentStart(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handlePrev = () => {
    if (api && currentStart > 0) {
      api.scrollTo(currentStart - 1);
    }
  };

  const handleNext = () => {
    if (api && currentStart < promoVideos.length) {
      api.scrollTo(currentStart + 1);
    }
  };

  const handleNavigationClick = (index: number) => {
    if (api && index >= 0 && index <= promoVideos.length) {
      api.scrollTo(index);
    }
  };

  const handleVideoClick = (id: number) => {
    const videoElement = videoRefs.current[id];
    if (!videoElement) return;

    if (itemPlaying === id) {
      videoElement.pause();
      setItemPlaying(null);
    } else {
      videoRefs.current.forEach((video, index) => {
        if (video && index !== id) {
          video.pause();
          video.currentTime = 0;
        }
      });

      videoElement.currentTime = 0;
      videoElement.play();
      setItemPlaying(id);
    }
  };

  const handleVideoEnd = (id: number) => {
    if (itemPlaying === id) {
      setItemPlaying(null);
    }
  };
  return (
    <div className="flex flex-col gap-3 relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: false,
          align: "start",
          slidesToScroll: 1,
        }}
        className="rounded-sm"
      >
        <CarouselContent className="px-2 rounded-sm">
          {promoVideos.map((video) => {
            const { id, poster, url } = video;
            return (
              <CarouselItem
                key={id}
                className="sm:basis-[25.1%] basis-[80%] py-1 not-first:ml-px flex justify-center  hover:cursor-pointer"
                onClick={() => handleVideoClick(id)}
              >
                <div className="h-full w-full rounded-sm relative ">
                  <div
                    className={cn(
                      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor pointer",
                      itemPlaying === id && "hidden",
                    )}
                  >
                    <img src={playButton} alt="play-icon" className="size-8" />
                  </div>
                  <video
                    ref={(el) => {
                      videoRefs.current[id] = el;
                    }}
                    playsInline
                    poster={poster}
                    className="aspect-9/16 w-full h-full rounded-sm object-cover overflow-hidden"
                    onEnded={() => handleVideoEnd(id)}
                  >
                    <source src={url} type="video/mp4" />
                  </video>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="absolute sm:bottom-2.5 bottom-2.25 w-full sm:max-w-[calc(100%-200px)] max-w-[calc(100%-90px)]">
        <div className="flex w-full  gap-0 max-sm:hidden">
          {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              aria-label={`Go to position ${index + 1}`}
              className="w-full h-4 cursor-pointer"
            >
              <div
                className={cn(
                  "bg-muted-foreground/25 h-1 w-full ",
                  currentStart === index && "bg-main-green",
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex w-full gap-0 sm:hidden">
          {Array.from({ length: promoVideos.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              aria-label={`Go to position ${index + 1}`}
              className="w-full h-4 cursor-pointer"
            >
              <div
                className={cn(
                  "bg-muted-foreground/25 h-1 w-full ",
                  currentStart === index && "bg-main-green",
                )}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex gap-3 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            disabled={currentStart === 0}
            className="bg-white flex justify-center items-center size-8.25 rounded-full disabled:opacity-100 cursor-pointer disabled:cursor-pointer"
          >
            <img src={leftArrowIcon} alt="left-arrow" className="size-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={currentStart === promoVideos.length}
            className="bg-white flex justify-center items-center size-8.25 rounded-full rotate-180 disabled:opacity-100 cursor-pointer disabled:cursor-pointer"
          >
            <img src={leftArrowIcon} alt="left-arrow" className="size-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoriesCarousel;
