import Carousel from "./carousel";

const Reviews = () => {
  return (
    <div className="bg-[#f9f2ed]">
      <section id="reviews" className="md:pt-20 md:pb-15 pt-15 pb-10">
        <div className="flex flex-col md:gap-10 gap-6.25">
          <div className="flex flex-col text-center md:gap-5 gap-2.5">
            <h1 className="font-arizona md:text-[40px] text-[32px] leading-11 ">
              10,000+ 5 Star Reviews
            </h1>
            <p className="max-w-150 mx-auto max-md:text-[13px]">
              These are actual IM8 verified customers that have seen successful
              health outcomes with the consistent use of IM8 Daily Ultimate
              Essentials.
            </p>
          </div>
          <Carousel />
          <div className="mt-5 text-lg text-center">
            <strong>11,825 Reviews</strong> | Average Rating: 4.8/5
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
