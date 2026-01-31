import AddButton from "@/icons/add-button";
import type { MemberType } from "@/types/team.type";
import { useState } from "react";
import InfoModal from "../info-modal";

type Props = {
  member: MemberType;
};

const Card = ({ member }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { role, img, name } = member;

  return (
    <>
      <div
        className="rounded-xl flex max-md:flex-col md:bg-[#f5eaea] cursor-pointer relative h-full max-md:h-fit"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="h-full md:w-[46%] w-full relative">
          <img
            src={img}
            alt={name}
            className="size-full rounded-l-xl max-md:rounded-r-xl object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-4 right-4 md:hidden">
            <AddButton className="size-12" />
          </div>
        </div>
        <div className="md:py-6 md:pr-8 md:pl-4 pt-3 flex flex-col gap-1 text-base md:w-[54%]">
          <p className="font-bold">{name}</p>
          <p className="max-xl:text-xs max-md:text-base">{role}</p>
        </div>
        <div className="absolute bottom-4 right-4 max-xl:bottom-3 max-xl:right-3 max-md:hidden">
          <AddButton className="size-12 max-xl:size-8" />
        </div>
      </div>
      <InfoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        member={member}
      />
    </>
  );
};

export default Card;
