import Container from "@/components/common/container";
import { expertImg } from "../hero/review/mock-data";
import TryButton from "@/components/common/button/try-button";
import SectionHeader from "@/components/common/typography/section-header";

const Advice = () => {
  return (
    <Container id="advice" className="sm:py-14 max-sm:px-0">
      <div className="bg-[#f7f7f7] grid sm:grid-cols-2 sm:rounded-xl max-sm:py-8 max-sm:px-3.75">
        <div className="sm:p-8 p-4 max-sm:bg-white flex flex-col gap-4 max-sm:rounded-b-xl">
          <p className="text-muted-foreground">July 4th, 2025</p>
          <SectionHeader hasSpacing={false} className="text-left">
            Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
          </SectionHeader>
          <div className="flex flex-col gap-3 text-lg sm:leading-5.5 leading-6">
            <p>
              “Your nutrition plays a powerful role in your appearance. If your
              body is missing key vitamins and nutrients, it can’t process fat
              and upkeep healthy connective tissue, which is why unprocessed fat
              flows up and starts pushing up against your skin, forming bumps
              you know as cellulite.
            </p>
            <p>
              SmoothSkin by Sculptique™ contains ingredients that are
              scientifically proven to enhance microcirculation, boost lymphatic
              drainage, and reduce inflammation, which restores your tissue and
              breaks down the fat cells in your skin.”
            </p>
          </div>
          <div className="mt-2">
            <TryButton className="self-start" isSubTextBold={false} />
          </div>
        </div>
        <div className="w-full max-sm:order-first max-sm:bg-white max-sm:rounded-t-xl max-sm:pb-2">
          <img
            src={expertImg}
            alt="expert-picture"
            loading="lazy"
            className="object-cover w-full h-full rounded-xl "
          />
        </div>
      </div>
    </Container>
  );
};

export default Advice;
