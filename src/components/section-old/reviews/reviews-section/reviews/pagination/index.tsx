import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiSkipLeftLine,
  RiSkipRightLine,
} from "react-icons/ri";
import NavButton from "./nav-button";
import { cn } from "@/lib/utils";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const getPageNumbers = () => {
    const pages: number[] = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  if (totalPages === 0) {
    return null;
  }
  return (
    <div className="flex items-center justify-center py-4 border-t border-[#fa8a8a1a]">
      {!isFirstPage && (
        <>
          <NavButton
            onClick={() => onPageChange(1)}
            aria-label="Go to first page"
          >
            <RiSkipLeftLine className="size-4.5" strokeWidth={1} />
          </NavButton>
          <NavButton
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Go to previous page"
          >
            <RiArrowLeftSLine className="size-4.5" strokeWidth={1} />
          </NavButton>
        </>
      )}

      <div className="flex items-center gap-2 font-montserrat">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "hover:opacity-80 cursor-pointer text-main-pink py-1 px-2 md:text-base text-[15px]",
              currentPage === page &&
                "cursor-default md:text-2xl text-[22.5px] font-bold text-[#7b7b7b]",
            )}
          >
            {page}
          </button>
        ))}
      </div>

      {!isLastPage && (
        <>
          <NavButton
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Go to next page"
          >
            <RiArrowRightSLine className="size-4.5" strokeWidth={1} />
          </NavButton>
          <NavButton
            onClick={() => onPageChange(totalPages)}
            aria-label="Go to last page"
          >
            <RiSkipRightLine className="size-4.5" strokeWidth={1} />
          </NavButton>
        </>
      )}
    </div>
  );
};

export default Pagination;
