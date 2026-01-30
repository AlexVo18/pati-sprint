import TryButton from "@/components/common/button/try-button";
import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import { worldwideReviewCenterImg } from "@/mock";
import StoriesCarousel from "./stories-carousel";

const Stories = () => {
  return (
    <div className="bg-main-skin">
      <Container id="stories" className="sm:py-14 py-8">
        <div className="flex flex-col ">
          <SectionHeader
            hasSpacing={false}
            topSection={
              <div className="w-full flex justify-center ">
                <img
                  src={worldwideReviewCenterImg}
                  alt="worldwide-review"
                  className="max-w-75"
                />
              </div>
            }
            className="mb-4"
          >
            See The Stories of Sculptique™ Women Firsthand
          </SectionHeader>
          <StoriesCarousel />
          <div className="mt-8">
            <TryButton isSubTextBold={false} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stories;
