import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import FirstParagraph from "./first-paragraph";
import SecondParagraph from "./second-paragraph";

const DrainageSystem = () => {
  return (
    <Container id="system" className="sm:mb-14">
      <div className="flex flex-col sm:gap-8 gap-6 ">
        <SectionHeader className="mb-2 mt-4" hasSpacing={false}>
          Your <span className="text-main-green">Hidden</span> Drainage System
        </SectionHeader>
        <FirstParagraph />
        <SecondParagraph />
      </div>
    </Container>
  );
};

export default DrainageSystem;
