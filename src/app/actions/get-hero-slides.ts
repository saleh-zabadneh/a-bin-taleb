"use server";

import { fakerAR } from "@faker-js/faker";

export type HeroSlide = {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
};

export async function getHeroSlides(count: number = 3): Promise<HeroSlide[]> {
  return Array.from({ length: count }, () => ({
    id: fakerAR.string.uuid(),
    title: fakerAR.commerce.productName(),
    description: fakerAR.commerce.productDescription(),
    discount: `خصم يصل إلى ${fakerAR.number.int({
      min: 10,
      max: 50,
    })}% على جميع المنتجات`,
    image: fakerAR.image.urlLoremFlickr({ category: "pool" }),
  }));
}
