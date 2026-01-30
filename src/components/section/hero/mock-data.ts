import type { ContentListItemType, OptionType } from "@/types/hero.type";

export const productAdImgs = [
  "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685",
  "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685",
];

export const productEffImgs = [
  "https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216",
  "https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216",
];

export const saleBadgeImg =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224";

export const ratings =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359";

export const benefits = [
  {
    icon: "https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
    des: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
    des: "Restores your body’s natural 24-hour lymphatic cycle",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
    des: "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
    des: "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
    des: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
    des: "Boosts energy, mental clarity and emotional balance",
  },
];

export const options: OptionType[] = [
  {
    id: "option1",
    title: "1 Bottle",
    subTitle: "1 bottle total | Save $27.99",
    price: "$31.96",
    originalPrice: "$59.95",
    refill: "Refills Ship Monthly",
    isSale: false,
    perks: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
    ],
  },
  {
    id: "option2",
    title: "Buy 2 Get 1 Free",
    subTitle: "3 bottles total | Save $115.93",
    price: "$63.92",
    originalPrice: "$179.85",
    refill: "Refills Ship Bi-Monthly",
    isSale: true,
    perks: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        text: "Free Anti-Bloating Protocol E-book",
      },
    ],
  },
  {
    id: "option3",
    title: "Buy 3 Get 2 Free",
    subTitle: "5 bottles total | Save $203.87",
    price: "$95.88",
    originalPrice: "$299.75",
    refill: "Refills Ship Every 12 Week",
    isSale: false,
    perks: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        text: "Free Anti-Bloating Protocol E-book",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309",
        text: "$20 Gift Card",
      },
    ],
  },
];

export const cancelImg =
  "https://cdn.shopify.com/s/files/1/0779/0673/9384/files/clock.webp";

export const payments =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654";

export const newYearPromoImg =
  "//trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486";

export const daysImg =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864";

export const americanFlag =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864";

export const cusAvt =
  "//trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889";

export const verification =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267";

export const plusIcon =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844";

export const plusRedIcon =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand.png?v=1752069152";

export const ingredients: ContentListItemType[] = [
  {
    title: "Echinacea purpurea Extract",
    content:
      "Known for its anti-inflammatory properties, it may support skin health.",
  },
  {
    title: "Dandelion Extract",
    content:
      "Traditionally used as a diuretic, it may help reduce water retention.",
  },
  {
    title: "Burdock Powder",
    content: "Contains antioxidants that may promote skin clarity.",
  },
  {
    title: "Cleavers Extract",
    content: "Believed to support lymphatic drainage and detoxification.",
  },
  {
    title: "Rutin",
    content:
      "A flavonoid that may strengthen blood vessels and improve circulation.",
  },
  {
    title: "Bromelain Powder",
    content:
      "An enzyme from pineapple that may reduce inflammation and support tissue repair.",
  },
  {
    title: "Lemon Powder",
    content:
      "Rich in vitamin C, it may aid in collagen production and skin rejuvenation.",
  },
  {
    title: "Kelp Extract",
    content:
      "A source of iodine and minerals that may support skin metabolism.",
  },
];

export const leaveIcon =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629";

export const supplementFacts =
  "https://trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223";

export const redCheckIcon =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285";

export const garantuees = [
  "Made & produced in the USA",
  "100% Natural Ingredients",
  "60-Day Money-Back Guarantee",
  "Free Shipping",
];

export const doctorAvts = [
  "https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0",
  "https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4",
  "https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a",
];

export const MD_IMAGES_LENGTH = 6;
