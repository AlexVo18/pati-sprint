import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ambassadors } from "../mock-data";
import PlayButton from "@/icons/play-button";

const Ambassadors = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-arizona font-medium">
        What our IM8 Ambassadors are saying
      </p>
      <Carousel
        opts={{
          dragFree: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent>
          {ambassadors.map((item, index) => (
            <CarouselItem key={index} className="basis-[19.3%] relative ">
              <button
                type="button"
                onClick={() => {
                  console.log(item.videoHref);
                }}
                className="cursor-pointer"
              >
                <img
                  src={item.imageHref}
                  alt=""
                  draggable={false}
                  className="rounded-lg"
                />
              </button>
              <PlayButton className="absolute bottom-5 right-3 size-6" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Ambassadors;
