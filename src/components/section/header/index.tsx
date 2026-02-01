import BlackArrow from "@/icons/black-arrow";
import { logo } from "./mock-data";

const Header = () => {
  return (
    <div className="bg-main-red ">
      <a
        href=""
        className="py-2  max-w-372.5 container mx-auto flex items-center justify-between font-nb text-white  text-sm px-12"
      >
        <div></div>
        <div className="flex md:gap-2  max-md:flex-col text-center">
          <strong>2026 STARTS NOW: </strong>
          <strong>35% OFF — Feel Like Yourself Again</strong>
        </div>
        <div className=" ">
          <div className="flex items-end max-lg:hidden">
            <strong>AUD</strong> <BlackArrow className="size-4" />
          </div>
        </div>
      </a>
      <div className="w-full bg-white">
        <div className="bg-white flex justify-between items-center max-md:px-2 mx-auto max-w-350 h-16">
          <div className="flex items-center max-xl:hidden">
            <div className="py-5 px-4.5 ">
              <p className="hover:underline decoration-2 cursor-pointer font-medium">
                Shop
              </p>
            </div>
            <div className="py-5 px-4.5 ">
              <p className="hover:underline decoration-2 cursor-pointer font-medium">
                Science
              </p>
            </div>
            <div className="py-5 px-4.5 ">
              <p className="hover:underline decoration-2 cursor-pointer font-medium">
                The Beckham Stack
              </p>
            </div>
            <div className="py-5 px-4.5 ">
              <p className="hover:underline decoration-2 cursor-pointer font-medium">
                Welcome drom David
              </p>
            </div>
          </div>
          <div className="py-5 px-4.5 xl:hidden">
            <svg
              className="icon icon-hamburger"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 16H30"
                stroke="#A40011"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2 7H30"
                stroke="#A40011"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2 25H30"
                stroke="#A40011"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div>
            <img
              src={logo}
              alt="logo"
              className="aspect-95/24.5627 max-w-full w-23.75 h-full"
            />
          </div>
          <div className="flex items-center">
            <div className="py-5 px-4.5 max-xl:hidden">
              <p className="hover:underline decoration-2 cursor-pointer font-medium">
                Reviews
              </p>
            </div>
            <div className="py-5 px-4.5 max-xl:hidden">
              <p className="hover:underline decoration-2 cursor-pointer font-medium">
                Ingredients
              </p>
            </div>
            <div className="py-5 px-4.5 max-xl:hidden">
              <p className="hover:underline decoration-2 cursor-pointer font-medium">
                Discover
              </p>
            </div>
            <div className="py-5 px-4.5 max-md:px-1">
              <svg
                className="icon icon-account"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 30C3 22.82 8.82 17 16 17C23.18 17 29 22.82 29 30"
                  stroke="#50000B"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></path>
                <path
                  d="M16 17C20.1421 17 23.5 13.6421 23.5 9.5C23.5 5.35786 20.1421 2 16 2C11.8579 2 8.5 5.35786 8.5 9.5C8.5 13.6421 11.8579 17 16 17Z"
                  stroke="#50000B"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></path>
              </svg>
            </div>
            <div className="py-5 px-4.5 max-md:px-1">
              <svg
                className="icon icon-cart-empty"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z"
                  stroke="#50000B"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
