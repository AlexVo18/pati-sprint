import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import {
  connectionImg,
  connectionImgSm,
  doubleArrowIcon,
  nobodyTellingImg,
  nobodyTellingImgSm,
  symptoms,
} from "./mock-data";
import SymptomCard from "./symptom-card";

const Connection = () => {
  return (
    <Container className="sm:pt-14 pt-8" id="connection">
      <div className="flex flex-col gap-4">
        <SectionHeader
          subText={
            "If you're experiencing more than one of these symptoms, your body is trying to tell you something:"
          }
        >
          Why Your{" "}
          <span className="text-main-green">
            Bloating, Brain Fog & Swollen Legs
          </span>{" "}
          Are Actually Connected
        </SectionHeader>
        <div>
          <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-4 gap-2">
            {symptoms.map((item) => (
              <SymptomCard item={item} key={item.des} />
            ))}
          </div>
          <div className="sm:max-w-230 max-w-105 mx-auto w-full">
            <img
              src={nobodyTellingImg}
              alt="what-nobody-telling"
              loading="lazy"
              className="w-full max-sm:hidden"
            />
            <img
              src={nobodyTellingImgSm}
              alt="what-nobody-telling-small"
              loading="lazy"
              className="w-full sm:hidden mt-6"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={doubleArrowIcon}
            alt="lead-to"
            loading="lazy"
            className="sm:max-w-12 max-w-8.5 w-full"
          />
        </div>
        <SectionHeader hasSpacing={false}>
          The Connection{" "}
          <span className="text-main-green">You've Been Missing</span>
        </SectionHeader>
        <div className="sm:max-w-230 max-w-105 mx-auto w-full">
          <img
            src={connectionImg}
            alt="the-connection"
            loading="lazy"
            className="w-full max-sm:hidden"
          />
          <img
            src={connectionImgSm}
            alt="what-nobody-telling-small"
            loading="lazy"
            className="w-full sm:hidden "
          />
        </div>
        <div className="flex justify-center">
          <img
            src={doubleArrowIcon}
            alt="lead-to"
            loading="lazy"
            className="sm:max-w-12 max-w-8.5 w-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default Connection;
