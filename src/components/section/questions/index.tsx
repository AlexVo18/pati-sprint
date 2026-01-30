import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import TryButton from "@/components/common/button/try-button";
import QuestionsAccordion from "./questions-accordion";

const Questions = () => {
  return (
    <Container id="questions" className="sm:py-14 py-8">
      <div className="flex flex-col gap-4">
        <SectionHeader className="mt-4" hasSpacing={false}>
          Frequently Asked Questions
        </SectionHeader>
        <div className="sm:max-w-206 mx-auto w-full">
          <QuestionsAccordion />
        </div>
        <div className="mt-2">
          <TryButton isSubTextBold={false} />
        </div>
      </div>
    </Container>
  );
};

export default Questions;
