import { cusAvt, ratings, verification } from "../mock-data";

const Review = () => {
  return (
    <div className="bg-main-skin rounded-lg p-3 mt-2 flex flex-col gap-2 tracking-normal">
      <div className="flex items-center gap-4">
        <div className="w-[13%]">
          <img src={cusAvt} alt="customer-avatar" loading="lazy" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-2 items-center">
            <p>Margaret Ellison | FL</p>
            <img src={verification} alt="verification" className="max-w-30" />
          </div>
          <div>
            <img src={ratings} alt="ratings" className="w-25" />
          </div>
        </div>
      </div>
      <p className="font-semibold">
        Even my husband noticed... the spark came back.
      </p>
      <p>
        After years of hiding under coverups, picking apart my body, and feeling
        disconnected, I finally feel at ease again. I feel less bloated,
        lighter, like my body is working with me not against me. These past
        months, I’ve been present. Even my marriage feels renewed, not just in
        how I look but in how I feel. It’s hard to explain, but once you try it
        you’ll get it. I’d recommend this to my closest friends without
        question.
      </p>
    </div>
  );
};

export default Review;
