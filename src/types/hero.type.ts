export type OptionType = {
  id: string;
  title: string;
  subTitle: string;
  price: string;
  originalPrice: string;
  isSale: boolean;
  refill: string;
  perks: PerkType[];
};

export type PerkType = {
  icon: string;
  text: string;
};

export type BenefitType = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export type ContentListItemType = Omit<BenefitType, "id">;
