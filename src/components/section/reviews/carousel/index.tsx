import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { reviews } from "../mock-data";
import Card from "../card";

const Carousel = () => {
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      startDelay: 100,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 0.75,
    }),
  ]);
  return (
    <div className="embla ">
      <div className="embla__viewport cursor-grab py-6 -my-6" ref={emblaRef}>
        <div className="embla__container flex gap-4 select-none ">
          {duplicatedReviews.map((review, index) => (
            <div key={`${review.name}-${index}`}>
              <div className="shrink-0 w-100 h-full ">
                <Card data={review} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
