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
        <div className="bg-white flex justify-between items-center px-12.5 mx-auto max-w-350 h-16">
          <div></div>
          <div>
            <img
              src={logo}
              alt="logo"
              className="aspect-95/24.5627 max-w-full w-23.75 h-full"
            />
          </div>
          <div className="flex items-center">
            <div className="py-5 px-4.5 ">
              <p className="ring-main-dark-red pb-0.5 hover:ring-b-">Reviews</p>
            </div>
            <div className="py-5 px-4.5">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
