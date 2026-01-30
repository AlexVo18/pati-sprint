import { useState } from "react";
import "./styles.css";
import ScoreRating from "./score-rating";
import FormButton from "../form-button";
import { displayNameData } from "../mock-data";
import { PiUploadSimpleFill } from "react-icons/pi";

type Props = {
  onClose: () => void;
};

const ReviewForm = ({ onClose }: Props) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const MAX_CONTENT_LENGTH = 5000;

  const sumbitForm = () => {
    const data = {
      rating,
      name,
      email,
      content,
    };
    console.log(data);
  };

  return (
    <div className=" py-6  border-t border-[#fa8a8a1a]">
      <form
        onSubmit={sumbitForm}
        className="max-w-150 mx-auto space-y-2 animate-dropdown px-4 flex flex-col gap-4"
        style={{
          animation: "dropdown 0.2s ease-out forwards",
        }}
      >
        <h3 className="text-center text-2xl font-bold">Write a review</h3>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <label className="">Rating</label>
            <ScoreRating rating={rating} onRatingChange={setRating} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div>
            <label
              htmlFor="content-input"
              className="cursor-pointer md:text-base text-[15px] font-montserrat"
            >
              Review content
            </label>
            <span className="text-[80%] text-[#7b7b7b]">
              {" "}
              ({MAX_CONTENT_LENGTH - content.length})
            </span>
          </div>

          <textarea
            id="content-input"
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            placeholder="Start writing here..."
            className="px-4 py-2 w-full border border-[#e4e4e4] focus:outline-none focus:border-main-pink text-sm"
          ></textarea>
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="cursor-pointer md:text-base text-[15px] font-montserrat">
            Picture/Video (optional)
          </label>
          <div className="border border-[#e4e4e4] size-32 relative flex items-center justify-center hover:opacity-70 mb-2.5 cursor-pointer">
            <PiUploadSimpleFill
              className="text-[#7b7b7b]"
              size={60}
              strokeWidth={4}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="name-input"
            className="cursor-pointer md:text-base text-[15px] font-montserrat text-center"
          >
            Display name (displayed publicly like{" "}
            <span className="py-2">
              <select className="text-main-pink py-2.5 text-sm cursor-pointer hover:opacity-80 tracking-tight focus:outline-[#858585] focus:outline-2 focus:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.4)] z-1">
                {displayNameData.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </span>{" "}
            )
          </label>
          <input
            id="name-input"
            onChange={(e) => setName(e.target.value)}
            placeholder="Display name"
            className="px-4 py-2 w-full border border-[#e4e4e4] focus:outline-none focus:border-main-pink text-sm"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="email-input"
            className="cursor-pointer md:text-base text-[15px] font-montserrat"
          >
            Email address
          </label>
          <input
            id="email-input"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="px-4 py-2 w-full border border-[#e4e4e4] focus:outline-none focus:border-main-pink text-sm"
          />
        </div>
        <div className="text-center">
          How we use your data: We'll only contact you about the review you
          left, and only if necessary. By submitting your review, you agree to
          Judge.me's{" "}
          <a
            href="https://judge.me/terms"
            target="_blank"
            className="underline text-blue-800"
          >
            terms
          </a>
          ,{" "}
          <a
            href="https://judge.me/privacy"
            target="_blank"
            className="underline text-blue-800"
          >
            privacy
          </a>{" "}
          and{" "}
          <a
            href="https://judge.me/content-policy"
            target="_blank"
            className="underline text-blue-800"
          >
            content
          </a>{" "}
          policies.
        </div>
        <div className="flex items-center gap-3 justify-center mb-6">
          <FormButton
            buttonType="outline"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            Cancel review
          </FormButton>
          <FormButton
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit Review
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
