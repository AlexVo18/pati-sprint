import Container from "@/components/common/container";
import { logo, navLinks } from "./mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LinkAccordion from "./link-accordion";

const Footer = () => {
  return (
    <div className="bg-main-dark-red">
      <Container
        id="footer"
        className="lg:pt-18 md:pt-12.5 pt-10 sm:pb-8.5 pb-6 flex flex-col gap-14 lg:gap-12.5 sm:gap-10 text-main-light-red"
        isLargeScreen={true}
      >
        <div className="flex max-lg:flex-col-reverse max-lg:gap-12.5 items-start md:mb-7.5">
          <div className="w-full">
            <div className="max-md:hidden grid grid-cols-5 gap-5">
              {navLinks.map((section) => {
                const { children, title } = section;
                return (
                  <div key={title}>
                    <div className="uppercase font-sans font-bold text-base tracking-wide pb-2">
                      {title}
                    </div>
                    {children.map((item) => {
                      const { label, href } = item;
                      return (
                        <div className="py-2 text-sm">
                          <a key={label} href={href}>
                            {label}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="md:hidden w-full">
              <LinkAccordion />
            </div>
          </div>
          <div className="max-md:hidden flex flex-col gap-5 lg:w-[32.5%] w-[50%] max-lg:mx-auto pl-11.25 lg:border-l border-[#ff96934d] ">
            <div className="uppercase font-sans font-bold text-base tracking-wide max-lg:text-center">
              Join the community for exclusive wellness insights
            </div>
            <div className="flex flex-col gap-3">
              <Input
                placeholder="EMAIL ADDRESS"
                className="uppercase font-nb rounded-full bg-white text-main-dark-red placeholder:text-main-dark-red pr-3.75 pl-7.5 focus-visible:ring-0 outline-0 leading-5 min-h-12"
              />
              <Button className="uppercase text-white bg-main-red hover:bg-main-red rounded-full p-3.25 leading-5.5 font-bold h-fit">
                <div>Join Now</div>
              </Button>
            </div>
            <div>
              <p className="text-xs max-w-70 max-lg:text-center">
                *By joining, you'll receive our wellness insights and can
                unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-sm:items-center">
          <img src={logo} alt="logo" className="w-full shrink-0" />
          <div className=" flex items-center gap-1 md:text-[#ffffff80] sm:pt-7.5 pt-2.5 text-xs">
            <span>© 2026 IM8®</span>
            <a href="https://im8health.com/pages/privacy-policy">
              • Privacy Policy
            </a>
            <a href="https://im8health.com/pages/terms-of-service">
              • Terms of Service
            </a>
          </div>
          <div className="mx-auto max-w-252 flex flex-col gap-2.5 my-12.5 max-sm:my-2.5 text-center">
            <div className="p-2.5 border border-main-light-red">
              <p className="my-3.75 font-bold">
                *These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure or prevent any disease.
              </p>
            </div>
            <p className="text-xs">
              **Free Welcome Kit available for new subscribers only.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
