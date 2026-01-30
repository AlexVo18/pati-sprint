import Container from "@/components/common/container";
import SectionHeader from "@/components/common/typography/section-header";
import { reviewsData, worldwideReviewImg } from "./mock-data";
import { splitReviews } from "./util/function";
import ReviewsSummary from "./reviews-summary";
import { useMemo, useState } from "react";
import ReviewForm from "./review-form";
import { cn } from "@/lib/utils";
import Authen from "./authen";
import ReviewSection from "./reviews-section";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("most-recent");
  const prodReview = splitReviews(reviewsData);
  const [chosenRating, setChosenRating] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 5;

  const filterBySelect = (value: string) => {
    setSelectedFilter(value);
    setCurrentPage(1);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const handleFormState = () => {
    setIsOpen((prev) => !prev);
  };

  const goToSection = () => {
    const targetElement = document.getElementById("review-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChooseRating = (type: string) => {
    setChosenRating(type);
    setCurrentPage(1);
  };

  const filteredAndSortedData = useMemo(() => {
    setIsLoading(true);
    try {
      let result = [...reviewsData];

      if (chosenRating !== "all") {
        const ratingValue = parseInt(chosenRating);
        if (!isNaN(ratingValue)) {
          result = result.filter((review) => review.rating === ratingValue);
        }
      }

      switch (selectedFilter) {
        case "most-recent":
          break;

        case "highest-rating":
          result.sort((a, b) => b.rating - a.rating);
          break;

        case "lowest-rating":
          result.sort((a, b) => a.rating - b.rating);
          break;

        case "only-pictures":
          result = result.filter((review) =>
            review.urls.some(
              (url) => url.type === "image" || url.type === "video",
            ),
          );
          break;

        case "pictures-first":
          result.sort((a, b) => {
            const aHasMedia = a.urls.some((url) => url.type === "image");
            const bHasMedia = b.urls.some((url) => url.type === "image");
            if (aHasMedia && !bHasMedia) return -1;
            if (!aHasMedia && bHasMedia) return 1;
            return 0;
          });
          break;

        case "videos-first":
          result.sort((a, b) => {
            const aHasVideo = a.urls.some((url) => url.type === "video");
            const bHasVideo = b.urls.some((url) => url.type === "video");
            if (aHasVideo && !bHasVideo) return -1;
            if (!aHasVideo && bHasVideo) return 1;
            return 0;
          });
          break;

        case "most-helpful":
          break;
      }

      return result;
    } catch (error) {
      console.log(error);
      return reviewsData;
    } finally {
      goToSection();
      setIsLoading(false);
    }
  }, [selectedFilter, chosenRating]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReviews = filteredAndSortedData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    goToSection();
  };

  return (
    <Container id="reviews" className="sm:py-14 py-8">
      <div className="flex flex-col">
        <div className="mb-4">
          <SectionHeader
            subText="All reviews verified from actual paying customers"
            topSection={
              <div className="flex justify-center">
                <img
                  src={worldwideReviewImg}
                  alt="worldwide-review"
                  className="max-w-50"
                />
              </div>
            }
            className="px-4 "
            hasSpacing={false}
          >
            Real Women, Real Results: 93,000+ Transformations
          </SectionHeader>
        </div>
        <div className="px-4 py-6 ">
          <ReviewsSummary
            data={prodReview}
            total={reviewsData.length}
            chosenRating={chosenRating}
            onClick={handleChooseRating}
            isOpen={isOpen}
            onClickForm={handleFormState}
          />
          <div
            className={cn("opacity-0 hidden", isOpen && "opacity-100 block")}
          >
            <ReviewForm onClose={handleCloseForm} />
          </div>
          <div className="border-t border-[#fa8a8a1a] sm:py-8 p-4 flex justify-center w-full">
            <Authen />
          </div>
          <div className="border-t border-[#fa8a8a1a]">
            <ReviewSection
              isLoading={isLoading}
              data={currentReviews}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onClick={filterBySelect}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
