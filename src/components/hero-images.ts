export const HERO_IMAGES = {
  backgrounds: ["/bg.png", "/bg-1.png", "/bg-2.png", "/bg-3.png"],
  overlays: ["/overlay.png", "/overlay-1.png"],
  ornament: "/ornament.png",
  mask: "/mask.png",
} as const;

export const HERO_SLIDES = [
  {
    id: "1",
    title: "عروض الصيف على جميع مستلزمات حمامات السباحة",
    description:
      "مجموعة واسعة من الاختيارات والخبرة وخبرة لا مثيل لها وخدمة عملاء لا مثيل لها. اكتشف الفرق وتأكد من أن حمام السباحة الخاص بك يظل لامعاً طوال العام.",
    discount: "خصم يصل إلى 25% على جميع المنتجات",
    image: HERO_IMAGES.backgrounds[0],
  },
  // Add more slides with different backgrounds
] as const;
