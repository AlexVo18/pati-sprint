import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import {
  productImg,
  productImgSm,
  usageRateImg,
  usageRateImgSm,
} from "./mock-data";

const Mission = () => {
  return (
    <Container id="misison" className="sm:py-14 py-8">
      <div className="flex items-center max-sm:flex-col max-sm:px-4">
        <div className="sm:px-8 flex flex-col gap-3">
          <SectionHeader className="sm:text-left mb-1 mt-4" hasSpacing={false}>
            We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get
            Rid Of Bloating…And Feel Like Themselves Again
          </SectionHeader>
          <p className="text-lg sm:leading-5.5 leading-6 max-sm:text-center">
            Here's where we're at right now:
          </p>
          <div className="max-sm:hidden">
            <img
              src={usageRateImg}
              alt="usage-rate"
              loading="lazy"
              className="w-full "
            />
          </div>
        </div>
        <div className="sm:w-[80%]">
          <img
            src={productImg}
            alt="product"
            loading="lazy"
            className="w-full overflow-hidden h-full object-cover rounded-xl max-sm:hidden"
          />
          <img
            src={productImgSm}
            alt="product-small"
            loading="lazy"
            className="w-full sm:hidden"
          />
        </div>
        <div className="sm:hidden mb-1">
          <img
            src={usageRateImgSm}
            alt="usage-rate-small"
            loading="lazy"
            className="w-full "
          />
        </div>
      </div>
    </Container>
  );
};

export default Mission;
