import Container from "@/components/common/container";
import { bgImg, teamMembers } from "./mock-data";
import Card from "./card";


const Team = () => {
  return (
    <div className="relative size-full">
      <img
        src={bgImg}
        alt="background image"
        className="size-full absolute inset-0 object-cover object-center -z-10"
      />
      <Container
        id="team"
        className="md:py-26 py-14 relative z-10"
        isLargeScreen
      >
        <div className="flex flex-col md:gap-14 gap-8 ">
          <div className="flex items-center justify-center w-full flex-col gap-1 text-center max-md:max-w-84 mx-auto">
            <p className="font-nb uppercase text-sm mb-4">Driven by Science</p>
            <h1 className="font-louzie md:text-[64px] text-[40px] leading-11">
              Meet The Brilliant Minds Behind IM8
            </h1>
            <p className="mt-4 text-base ">
              An unparalled collaboration between academia, medicine, and space
              science.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <Card member={member} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
