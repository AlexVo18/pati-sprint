import CountUp from "../count-up";

const Analytics = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col">
        <p className="md:text-[80px] text-[56px]  font-arizona leading-20">
          <CountUp to={95} duration={10000} />%
        </p>
        <hr className="bg-white max-w-46 h-0.5" />
        <div>Participants felt a noticeable boost in daily energy levels.</div>
      </div>
      <div className="flex flex-col">
        <p className="md:text-[80px] text-[56px]  font-arizona leading-20">
          <CountUp to={85} duration={10000} />%
        </p>
        <hr className="bg-white max-w-46 h-0.5" />
        <div>Felt less bloated and had improved digestion.</div>
      </div>
      <div className="flex flex-col">
        <p className="md:text-[80px] text-[56px]  font-arizona leading-20">
          <CountUp to={80} duration={10000} />%
        </p>
        <hr className="bg-white max-w-46 h-0.5" />
        <div>Participants reported getting better sleep.</div>
      </div>
      <div className="flex flex-col">
        <p className="md:text-[80px] text-[56px]  font-arizona leading-20">
          <CountUp to={70} duration={10000} />%
        </p>
        <hr className="bg-white max-w-46 h-0.5" />
        <div>
          Participants noticed sharper focus and improved mental clarity.
        </div>
      </div>
    </div>
  );
};

export default Analytics;
