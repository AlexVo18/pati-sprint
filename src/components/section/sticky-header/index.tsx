import { useEffect, useState } from "react";
import { logo } from "./mock-data";
import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD = 400;

const StickyHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        setVisible(y > SCROLL_THRESHOLD);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed left-0 right-0 top-0 z-50 pointer-events-none transition-transform duration-300 ease-in-out transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="pointer-events-auto mx-auto w-full  bg-main-dark-red backdrop-blur-sm ">
        <div className="flex items-center justify-between md:px-14 px-4 h-22">
          <div className="flex items-center md:w-[calc(100%-320px)]">
            <img
              src={logo}
              alt="logo"
              className="w-34.25 h-8.75 max-lg:hidden"
            />
            <div className="w-full mx-auto text-white text-center text-lg grow max-lg:text-sm max-md:text-[11px]">
              <strong>2026 STARTS NOW:</strong> 35% OFF — Feel Like Yourself
              Again
            </div>
          </div>

          <div>
            <Button className="uppercase bg-main-red hover:bg-main-dark-red  rounded-full transition duration-300 font-bold p-1.25 text-base max-md:text-[11px] w-80 h-11.75 max-md:w-30 cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
