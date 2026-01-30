import Container from "@/components/common/container";
import { checkIcon, dealsData } from "./mock-data";
import Card from "./card";

const Premium = () => {
  return (
    <Container isLargeScreen className="md:pt-26 md:pb-10 pt-19.5 pb-7.5">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col ">
          <h1 className="lg:text-[52px] md:text-4xl text-[28px] max-md: mb-4 font-louzie">
            Premium Core Nutrition
          </h1>
          <div className="flex max-md:flex-col md:items-center md:gap-4 gap-2">
            <div className="flex items-center gap-2">
              <span>
                <img src={checkIcon} alt="check icon" className="mb-px" />
              </span>
              <span>
                <strong>30-Day</strong> money back guarantee
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <img src={checkIcon} alt="check icon" className="mb-px" />
              </span>
              <span>
                <strong>Update</strong> or <strong>cancel</strong> anytime
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <img src={checkIcon} alt="check icon" className="mb-px" />
              </span>
              <span>
                <strong>Free shipping</strong> for all subscriptions
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {dealsData.map((item) => (
            <a className="" href={item.href} key={item.name}>
              <Card item={item} />
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Premium;
