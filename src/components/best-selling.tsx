"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "مسابح الفايبر جلاس",
    description:
      "نقدم خدمة فنية شركة في المملكة تقوم بتصنيع مسابح الفايبر جلاس...",
    image: "/pool-1.png",
  },
  {
    id: 2,
    title: "اعمال مدنية",
    description:
      "نقدم خدمات بناء المسابح والتي تشمل البلاطات والتمديدات وتركيب المعدات...",
    image: "/pool-2.png",
  },
  {
    id: 3,
    title: "ساونا وبخار",
    description:
      "تنفذ الساونا بناء على طلب العميل بدءا من الأرضية وحتى تجهيزات الساونا من الخشب...",
    image: "/sawna.png",
  },
];

export default function BestSelling() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  React.useEffect(() => {
    if (emblaApi) {
      // Reinitialize Embla when the component mounts
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <section className="relative py-4 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg-color.png"
          alt=""
          fill
          className=""
          style={{ backgroundColor: "#3C6799" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto lg:px-40">
        {/* Header content */}

        {/* Carousel container with background */}
        <div className="bg-[#1E1E1E]/30 backdrop-blur-sm shadow-lg p-8 rounded-lg">
          {/* Navigation Arrows */}
          <div className="flex items-center lg:px-8 px-2 justify-between ">
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="border-white/50 border-2 rounded-full lg:w-12 w-24 lg:h-12 h-9 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              aria-label="Next slide"
            >
              <ArrowLeft className="text-white/80" />
            </button>
            <div className="text-center  space-y-6">
              <div className="space-y-2">
                <span className="lg:text-lg text-sm font-medium text-white">
                  الخدمات المتميزة
                </span>
                <div className="flex gap-1 justify-center">
                  <div className="h-1 rounded-md w-6 bg-white" />
                  <div className="h-1 rounded-md w-12 bg-white" />
                  <div className="h-1 rounded-md w-24 bg-white" />
                </div>
              </div>
              <h2 className="lg:text-3xl text-lg font-bold text-white">
                الخدمات الأكثر مبيعاً من شركة بن طالب
              </h2>
              <p className="lg:text-lg text-sm text-white/90 max-w-3xl mx-auto">
                اكتشف لماذا تعد هذه العناصر المفضلة لدى عملائنا واثق بتوفير
                العناية بحمام السباحة الخاص بك مع حلول شركة بن طالب الأكثر ثقة.
              </p>
            </div>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="border-white/50 border-2 rounded-full lg:w-12 w-24 lg:h-12 h-9 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ArrowRight className="text-white/80" />
            </button>
          </div>
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-2">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-[0_0_calc(100%-16px)] min-w-0 sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-16px)] mx-2"
                >
                  <div className="relative rounded-lg overflow-hidden group">
                    <div className=" ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={392}
                        height={350}
                        className="object-cover w-full h-full  rounded-lg"
                        style={{ height: "486px" }}
                      />
                    </div>
                    <div className="absolute flex justify-center items-center flex-col bottom-0 left-0 right-0 bg-[#1E1E1E]/85 p-6 transform translate-y-0 transition-transform duration-300">
                      <h3 className=" font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-4">
                        {service.description}
                      </p>
                      <Button
                        variant="secondary"
                        className=" bg-custom-secondary hover:bg-custom-secondary/90 text-white rounded-none"
                      >
                        التفاصيل
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
