import { logos } from "./mock-data";
import "./styles.css";

const Press = () => {
  const list = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section id="press" className="py-5 bg-main-skin text-center">
      <div className="flex flex-col gap-5">
        <h2 className="font-lora md:text-2xl text-lg tracking-normal">
          As Seen In
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex items-center w-fit  md:animate-scroll animate-scroll-md">
            {list.map((logo, index) => (
              <img
                src={logo.url}
                alt={logo.name}
                key={`logo-${index}`}
                className="h-7.5 w-auto mx-12.5 max-md:mx-6.25 block max-md:max-h-5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
