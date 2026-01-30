import type { ReviewsByRatingType, ReviewType } from "@/types/reviews.type";

export const splitReviews = (data: ReviewType[]): ReviewsByRatingType[] => {
  const reviewsByRating: { [key: number]: ReviewType[] } = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };

  data.forEach((review) => {
    if (reviewsByRating[review.rating]) {
      reviewsByRating[review.rating].push(review);
    }
  });

  const result: ReviewsByRatingType[] = [
    {
      length: data.length,
      data: data,
      typeRating: "all",
    },
    {
      length: reviewsByRating[5].length,
      data: reviewsByRating[5],
      typeRating: "5",
    },
    {
      length: reviewsByRating[4].length,
      data: reviewsByRating[4],
      typeRating: "4",
    },
    {
      length: reviewsByRating[3].length,
      data: reviewsByRating[3],
      typeRating: "3",
    },
    {
      length: reviewsByRating[2].length,
      data: reviewsByRating[2],
      typeRating: "2",
    },
    {
      length: reviewsByRating[1].length,
      data: reviewsByRating[1],
      typeRating: "1",
    },
  ];

  return result;
};

export const financial = (x: number) => {
  return Number.parseFloat(x.toString()).toFixed(0);
};
