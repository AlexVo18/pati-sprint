export type ProductType = {
  name: string;
  pricePerServing: number;
  thumbnail: string;
  isPopular: boolean;
  images: string[];
  supplies: SupplyType[];
};

export type SupplyType = {
  name: string;
  savePct: number;
  months: number;
  pricePerMonth: number;
  pricePerServing: number;
  billedPrice: number;
  isBestValue: boolean;
  isOffer: boolean;
};

export type TrainerType = {
  name: string;
  image: string;
  role: string;
};

export type AmbassType = {
  videoHref: string;
  imageHref: string;
};
