import Container from "@/components/common/container";
import Questions from "./questions";
import CliniciansChoice from "./clinicians-choice";
import Review from "./review";
import ProductImages from "./product-images";
import Deals from "./deals";
import OverallReview from "./overall-review";

const Hero = () => {
  return (
    <Container id="hero" className="py-8 ">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-4 max-md:flex-wrap">
        <div>
          <ProductImages />
        </div>

        <div className="flex flex-col gap-4 flex-wrap mb-4">
          <OverallReview />
          <CliniciansChoice />
          <Deals />
          <Review />
          <Questions />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
