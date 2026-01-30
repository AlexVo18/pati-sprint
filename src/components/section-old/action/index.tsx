import Container from "@/components/common/container";
import { beforeAfterImg, reviewImg } from "./mock-data";
import TryButton from "@/components/common/button/try-button";
import SectionHeader from "@/components/common/typography/section-header";
import { worldwideReviewCenterImg } from "@/mock";

const Action = () => {
  return (
    <div className="bg-main-skin ">
      <Container id="action" className="sm:py-14 py-8">
        <div className="grid sm:grid-cols-2 sm:gap-15 gap-3">
          <div>
            <div className="h-full flex flex-col justify-center sm:gap-6 gap-4">
              <div className="flex max-sm:justify-center w-full">
                <img
                  src={reviewImg}
                  alt="worldwide-review"
                  className="max-w-87.5 max-sm:hidden"
                  loading="lazy"
                />
                <img
                  src={worldwideReviewCenterImg}
                  alt="worldwide-review-small"
                  className="max-w-62.5 sm:hidden"
                  loading="lazy"
                />
              </div>
              <SectionHeader hasSpacing={false} className="text-left">
                Stop Masking Symptoms. Start Restoring Root Cause.
              </SectionHeader>
              <div className="flex flex-col gap-3 text-lg sm:leading-5.5 leading-6">
                <p>
                  You deserve to feel like yourself again. To wake up without
                  puffiness. To see your ankles. To look in the mirror and
                  recognize the vibrant woman staring back. To have energy for
                  the people you love.
                </p>
                <p>
                  You deserve a solution that actually works. Not temporary
                  relief. Not symptom masking. Complete lymphatic restoration.
                </p>
              </div>
              <div className="max-sm:hidden max-w-122.5 mt-4">
                <TryButton className="self-start " isSubTextBold={false} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-sm:rounded-t-xl">
              <img
                src={beforeAfterImg}
                alt="expert-picture"
                loading="lazy"
                className="w-full h-full rounded-xl sm:pb-2"
              />
            </div>
          </div>
          <div className="sm:hidden mt-4">
            <TryButton className="self-start" isSubTextBold={false} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Action;
