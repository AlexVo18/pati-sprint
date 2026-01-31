import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { MemberType } from "@/types/team.type";
import RedX from "@/icons/red-x";
import "./styles.css";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  member: MemberType;
};

const InfoModal = ({ member, isModalOpen, setIsModalOpen }: Props) => {
  const { modalImg, name, role, description } = member;
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogOverlay className="bg-[rgba(242,224,221,.5)] blur-sm">
        <DialogContent className="pt-16 pb-10.5 px-8 " showCloseButton={false}>
          <DialogClose className="absolute top-6 right-6 cursor-pointer">
            <RedX className="size-8" />
          </DialogClose>
          <div className="flex flex-col gap-7.5">
            <div className="h-45">
              <img
                src={modalImg}
                alt={name}
                className="w-full object-cover rounded-xl"
              />
            </div>
            <ScrollArea className=" max-h-[40vh] custom-scrollbar text-main-dark-red pr-4">
              <DialogHeader className="gap-0 mb-5">
                <DialogTitle className="text-[32px] font-louzie">
                  {name}
                </DialogTitle>
                <p className="text-base font-bold">{role}</p>
              </DialogHeader>
              <div className="space-y-3">
                {description.map((paragraph, index) => (
                  <p key={index} className="text-base ">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollArea>
            <Button className=" rounded-full uppercase bg-main-red transition duration-300 hover:bg-main-dark-red font-bold text-base h-fit py-3.25 px-4.25">
              Learn More
            </Button>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default InfoModal;
