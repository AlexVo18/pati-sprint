import type { AmbassType, ProductType, TrainerType } from "@/types/hero.type";

export const bgImg =
  "//im8health.com/cdn/shop/files/Frame_1000004811-min.jpg?v=1727698766";

export const checkIcon =
  "https://im8health.com/cdn/shop/t/121/assets/sub_check.svg";
export const emptyRadioIcon =
  "https://im8health.com/cdn/shop/t/121/assets/radio_blank.svg";
export const fillRadioIcon =
  "https://im8health.com/cdn/shop/t/121/assets/radio_fill.svg";

export const galleryData = [
  "https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&width=1946",
  "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel02.jpg?v=1761040602",
  "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel03.jpg?v=1761040601",
  "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel04.jpg?v=1761040602",
  "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel05.jpg?v=1761040602",
  "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel06.jpg?v=1761040602",
  "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel07.jpg?v=1761040602",
];

export const labelImgs = [
  "//im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?v=1764063546&width=100",
  "//im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?v=1764063546&width=100",
  "//im8health.com/cdn/shop/files/b9a15702-8e60-441d-b1fd-ce12f6742dcb_svg.png?v=1764063545&width=100",
];

export const greenCheckIcon =
  "//im8health.com/cdn/shop/files/greencheck.png?v=1764066515&width=72";

export const redMinusIcon =
  "https://im8health.com/cdn/shop/t/121/assets/product_banner_minus.svg";

export const redPlusIcon =
  "https://im8health.com/cdn/shop/t/121/assets/product_banner_plus.svg";

export const products: ProductType[] = [
  {
    name: "Forever Jar",
    pricePerServing: 5.4,
    thumbnail:
      "//im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853",
    isPopular: true,
    images: [
      "https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&width=1946",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel02.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel03.jpg?v=1761040601",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel04.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel05.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel06.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel07.jpg?v=1761040602",
    ],
    supplies: [
      {
        name: "90-Day Supply",
        savePct: 30,
        pricePerMonth: 142,
        pricePerServing: 4.73,
        billedPrice: 426.0,
        isBestValue: true,
        isOffer: true,
        months: 12,
      },
      {
        name: "30-Day Supply",
        savePct: 20,
        pricePerMonth: 162,
        pricePerServing: 5.4,
        billedPrice: 162.0,
        isBestValue: false,
        isOffer: false,
        months: 4,
      },
    ],
  },
  {
    name: "Single-Serve Sachets",
    pricePerServing: 5.93,
    thumbnail:
      "//im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834",
    isPopular: false,
    images: [
      "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel01.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel02.jpg?v=1761042620",
      "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel03.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel04.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel05.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel06.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel07.jpg?v=1761040602",
      "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel07.jpg?v=1761040602",
    ],
    supplies: [
      {
        name: "90-Day Supply",
        savePct: 22,
        pricePerMonth: 156.33,
        pricePerServing: 5.21,
        billedPrice: 469.0,
        isBestValue: true,
        isOffer: true,
        months: 12,
      },
      {
        name: "30-Day Supply",
        savePct: 12,
        pricePerMonth: 178,
        pricePerServing: 5.93,
        billedPrice: 178.0,
        isBestValue: false,
        isOffer: false,
        months: 4,
      },
    ],
  },
];

export const benefits90Days = [
  "🎓 Exclusive Access to 90 Day IM8 Transformation Program (see below)",
  "💰 Maximum savings - lowest price per serving",
  "👦 Share with family and friends",
  "🎁 Free Daily Ultimate Mixer (US$18)",
  "🚚 Free Shipping to US, UK, CA, and most of EU and APAC",
  "⏸️ Cancel or pause anytime",
  "🎁 Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)",
];

export const benefits30Days = [
  "30-day money back guarantee",
  "Cancel or pause anytime",
  "Free Shipping to US, UK, CA, and most of EU and APAC",
  "Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)",
];

export const trainers: TrainerType[] = [
  {
    name: "Dr. Dawn Mussallem",
    image:
      "//im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298&width=300",
    role: "Cancer Survivor & Physician at Mayo Clinic",
  },
  {
    name: "Bobby Rich",
    image:
      "//im8health.com/cdn/shop/files/Rectangle_3_68b5f4fc-fe48-466d-9d97-487fbdea1942.png?v=1764066245&width=300",
    role: "Trainer to David Beckham and World-class Athletes",
  },
  {
    name: "Dr. Suzanne Devkota",
    image:
      "//im8health.com/cdn/shop/files/Rectangle_4_9e90556f-68ae-405e-a707-89eff3d64066.png?v=1764066309&width=300",
    role: "Gut Health Expert & Prof at Cedars Sinai",
  },
  {
    name: "Tavi Castro",
    image:
      "//im8health.com/cdn/shop/files/Rectangle_5.png?v=1764066392&width=300",
    role: "Breathwork Expert & Free-Diving World Record Holder",
  },
  {
    name: "Dr. Amy Shah",
    image:
      "//im8health.com/cdn/shop/files/Rectangle_7.png?v=1764066430&width=300",
    role: 'Double-Board Certified Physician and Host of "Save Yourself" Podcast',
  },
  {
    name: "Dr. Ara Suppiah",
    image:
      "//im8health.com/cdn/shop/files/Rectangle_6.png?v=1764066459&width=300",
    role: "Performance & Longevity Physician at LIV Golf",
  },
];

export const ambassadors: AmbassType[] = [
  {
    videoHref:
      "https://im8health.com/cdn/shop/videos/c/vp/12eb3b01fd54404d81ef22a20d415f15/12eb3b01fd54404d81ef22a20d415f15.HD-1080p-2.5Mbps-38313438.mp4?v=0",
    imageHref:
      "//im8health.com/cdn/shop/files/preview_images/thm-expert_robinB2.jpg?v=1731999065",
  },
  {
    videoHref:
      "https://im8health.com/cdn/shop/videos/c/vp/e83246a2555949139036fce9bc1359a2/e83246a2555949139036fce9bc1359a2.HD-1080p-3.3Mbps-38232086.mp4?v=0",
    imageHref:
      "//im8health.com/cdn/shop/files/preview_images/influe-carou_bobbyRich2.jpg?v=1731863977",
  },
  {
    videoHref:
      "https://im8health.com/cdn/shop/videos/c/vp/f7f68153342f4566ad00f411e2fb407b/f7f68153342f4566ad00f411e2fb407b.HD-1080p-7.2Mbps-38222859.mp4?v=0",
    imageHref:
      "//im8health.com/cdn/shop/files/preview_images/thm-expert_amyShah2.jpg?v=1731864964",
  },
  {
    videoHref:
      "https://im8health.com/cdn/shop/videos/c/vp/064b8beaa0b04a4fad25676155936d3a/064b8beaa0b04a4fad25676155936d3a.HD-1080p-2.5Mbps-38221672.mp4?v=0",
    imageHref:
      "//im8health.com/cdn/shop/files/preview_images/thm-influ_dustinPoirier.jpg?v=1731833492",
  },
  {
    videoHref:
      "https://im8health.com/cdn/shop/videos/c/vp/809d17a1684d40058d499ecd9afe9e21/809d17a1684d40058d499ecd9afe9e21.HD-1080p-4.8Mbps-38222820.mp4?v=0",
    imageHref:
      "//im8health.com/cdn/shop/files/preview_images/image_54.png?v=1731863088",
  },
  {
    videoHref:
      "https://im8health.com/cdn/shop/videos/c/vp/1f4b2af008104c92a29f9d78814f1aa0/1f4b2af008104c92a29f9d78814f1aa0.HD-1080p-3.3Mbps-38232121.mp4?v=0",
    imageHref:
      "//im8health.com/cdn/shop/files/preview_images/1f4b2af008104c92a29f9d78814f1aa0.thumbnail.0000000000.jpg?v=1731860287",
  },
];
