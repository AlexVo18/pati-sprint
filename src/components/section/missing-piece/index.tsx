import TryButton from "@/components/common/button/try-button";
import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import { missingImg, missingImgSm, reasons } from "./mock-data";
import ReasonItem from "./reason-item";

const MissingPiece = () => {
  return (
    <div className="bg-main-skin">
      <Container id="missing-piece" className=" mb-8.75 pb-17.5 sm:mt-18">
        <div className="flex flex-col gap-4">
          <SectionHeader className="" hasSpacing={false}>
            Why Nothing Has <span className="text-main-green">Worked</span>
          </SectionHeader>
          <div className="flex flex-col max-sm:gap-6">
            <div className="grid sm:grid-cols-3 sm:gap-4 gap-2">
              {reasons.map((item) => (
                <div key={item.reason}>
                  <ReasonItem item={item} />
                </div>
              ))}
            </div>
            <div className="sm:max-w-230 max-w-105 mx-auto w-full">
              <img
                src={missingImg}
                alt="the-missing-piece"
                loading="lazy"
                className="w-full max-sm:hidden"
              />
              <img
                src={missingImgSm}
                alt="the-missing-piece-small"
                loading="lazy"
                className="w-full sm:hidden"
              />
            </div>
          </div>

          <div className="w-full mt-2">
            <TryButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissingPiece;
