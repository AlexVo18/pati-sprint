import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { bgImg, experts } from "./mock-data";
import Card from "./card";

const Experts = () => {
  return (
    <div className="relative">
      <div className="w-full inset-0 absolute -z-10">
        <img src={bgImg} alt="" className="size-full object-cover" />
      </div>
      <section id="experts" className="md:py-26 py-14">
        <h1 className="text-center pb-14 md:text-[56px] text-[32px] max-md:leading-9 font-arizona max-md:max-w-83.75 max-md:mx-auto">
          Trusted by Physicians and Nutrition Experts
        </h1>
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="px-14">
            {experts.map((expert) => (
              <CarouselItem
                key={expert.alias}
                className="pl-4 basis-[85%] md:basis-[28%]"
              >
                <Card data={expert} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* <Container>
        <div className="flex flex-col">
          
          <div></div>
        </div>
      </Container> */}
    </div>
  );
};

export default Experts;
