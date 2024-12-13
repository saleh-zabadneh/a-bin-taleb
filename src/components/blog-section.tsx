"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/sawna.png",
    date: "February 15, 2024",
    author: "James R",
    title: "افتتاح فرعنا الجديد في الخبر",
    description:
      "حرصا منا لتوسيع خدمة عملائنا تم افتتاح فرع الخبر الجديد لتلبية طلبات عملائنا بإضافة خبرة كبيرة وخدمات متنوعة",
  },
  {
    id: 2,
    image: "/sawna.png",
    date: "February 15, 2024",
    author: "James R",
    title: "تدشين الخدمات الحديثة",
    description:
      "تزامنا مع التطور المتسارع للتكنولوجيا الحديثة والكم الهائل من المعلومات الإلكترونية لطالما حدث التطوير لتتماشى مع التطور الرقمي",
  },
  {
    id: 3,
    image: "/sawna.png",
    date: "February 15, 2024",
    author: "James R",
    title: "رواد التصميم والإبداع في الفيبر جلاس",
    description:
      "تم تطوير خدمة تصنيع مسابح الفايبر جلاس، للتصنيع تحت إشراف خبراء بالكامل. بإمكان العميل الآن تصميم الشكل و الحجم والعمق المناسب",
  },
  {
    id: 4,
    image: "/sawna.png",
    date: "February 15, 2024",
    author: "James R",
    title: "رواد التصميم والإبداع في الفيبر جلاس",
    description:
      "تم تطوير خدمة تصنيع مسابح الفايبر جلاس، للتصنيع تحت إشراف خبراء بالكامل. بإمكان العميل الآن تصميم الشكل و الحجم والعمق المناسب",
  },
];

export default function BlogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-40">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-50"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ArrowLeft className="text-[#0575DA]" />
          </Button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center">
            <span className="text-blue-500 mb-2">الأخبار الشركة</span>
            <div className="flex gap-1">
              <div className="h-1 rounded-md w-2 bg-custom-secondary" />
              <div className="h-1 rounded-md w-4 bg-custom-secondary" />
              <div className="h-1 rounded-md w-8 bg-custom-secondary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mt-6 mb-4">استكشف رؤيتنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            مصدرك المفضل لكل ما يتعلق بحمامات السباحة. استكشف ثروة من المعرفة
            والنصائح والمشورة من الخبراء الذين اختارهم فريق شركة بن طالب
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-50"
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ArrowRight className="text-[#0575DA]" />
          </Button>
        </div>
      </div>

      {/* Blog Posts Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
            >
              <Card className="rounded-none border-none overflow-hidden h-full">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="flex-row justify-between items-center">
                  <div className="text-sm text-gray-500">{post.date}</div>
                  <div className="text-sm text-gray-500">{post.author}</div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2 text-right">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-right leading-relaxed">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
