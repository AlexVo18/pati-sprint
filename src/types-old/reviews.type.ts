export type ReviewType = {
  rating: number;
  title?: string;
  content: string;
  name: string;
  email: string;
  isVerified: boolean;
  createdDate: string;
  urls: EvidenceType[];
};

export type EvidenceType = {
  type: "video" | "image";
  url: string;
};

export type ReviewsByRatingType = {
  length: number;
  data: ReviewType[];
  typeRating: "1" | "2" | "3" | "4" | "5" | "all";
};

export type FilterType = {
  value: string;
  label: string;
  type: string;
};

export type ErrorType = {
  id: string;
  type: string;
  content: string;
};
