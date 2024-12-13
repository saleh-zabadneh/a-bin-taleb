"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type HeroSlide } from "@/app/actions/get-hero-slides";

const OVERLAY_IMAGES = {
  backgrounds: ["/bg.png", "/bg-1.png", "/bg-2.png", "/bg-3.png"],
  primary: "/overlay.png",
  secondary: "/overlay-1.png",
  ornament: "/ornament.png",
  mask: "/mask.png",
};

export default function Hero({ slides }: { slides: HeroSlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
    dragFree: true,
  });
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="relative  h-screen overflow-hidden mx-auto">
      <div ref={emblaRef} className="h-full mx-auto">
        <div className="flex h-full mx-auto">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              {/* Dynamic Background Image */}
              <Image
                src={"/hero.jpg"}
                alt=""
                fill
                className="object-cover max-w-full max-h-full"
                priority={index === 0}
              />

              {/* Overlays and Backgrounds */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 " />
                <Image
                  src={OVERLAY_IMAGES.primary}
                  alt=""
                  fill
                  className="object-cover opacity-40 mix-blend-overlay"
                />
                <Image
                  src={OVERLAY_IMAGES.secondary}
                  alt=""
                  fill
                  className="object-cover opacity-30 mix-blend-soft-light"
                />
                <Image
                  src={OVERLAY_IMAGES.ornament}
                  alt=""
                  fill
                  className="object-contain opacity-10 mix-blend-overlay"
                />
                <Image
                  src={OVERLAY_IMAGES.mask}
                  alt=""
                  fill
                  className="object-cover opacity-5 mix-blend-overlay"
                />
                {OVERLAY_IMAGES.backgrounds.map((bg, idx) => (
                  <Image
                    key={idx}
                    src={bg}
                    alt=""
                    fill
                    className={`object-cover opacity-100 mix-blend-overlay ${
                      idx === 0
                        ? "rotate-[122.26deg]  bg-gray-600 opacity-50  max-h-[258.95px] max-w-[1069.16px]"
                        : idx === 1
                        ? " "
                        : idx === 2
                        ? " rotate-[-122.26deg] bg-gray-600 max-h-[258.95px] max-w-[1100.16px] top-[110.2px] left-[1590.16px]"
                        : "rotate-[122.26deg]  max-h-[258.95px] max-w-[9469.16px] bg-gray-600 opacity-90  left-[590.16px] "
                    }`}
                  />
                ))}
              </div>

              {/* Main Content Container */}
              <div className="relative h-full flex flex-col">
                {/* Top Section with Content and Navigation */}
                <div className="flex-1 flex items-center justify-around px-8 md:px-0">
                  {/* Right Side - Content */}
                  <div className="flex flex-col items-start space-y-6 max-w-2xl">
                    {/* Discount Text with Underline */}
                    <div className="relative">
                      <span className="text-white text-lg font-medium">
                        {slide.discount}
                      </span>
                      <div className="absolute -bottom-2 left-0 right-0 flex gap-1">
                        <div className="h-1 rounded-md w-6 bg-white" />
                        <div className="h-1 rounded-md w-12 bg-white" />
                        <div className="h-1 rounded-md w-24 bg-white" />
                      </div>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className="rounded-none px-8 py-6 text-md bg-custom-secondary hover:bg-custom-secondary/90 text-white mt-4 transition-all duration-300"
                    >
                      شاهد جميع المنتجات المعروضة للبيع
                    </Button>
                  </div>

                  {/* Left Side - Navigation Arrows */}
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => emblaApi?.scrollPrev()}
                      className="border-white/50 border-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      aria-label="Previous slide"
                    >
                      <ArrowRight className="text-white/80" />
                    </button>
                    <button
                      onClick={() => emblaApi?.scrollNext()}
                      className="border-white/50 border-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                      aria-label="Next slide"
                    >
                      <ArrowLeft className="text-white/80" />
                    </button>
                  </div>
                </div>

                {/* Bottom Section - Dots */}
                <div className="absolute bottom-12 left-0 right-0 items-center flex justify-center gap-1">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => emblaApi?.scrollTo(idx)}
                      className={`rounded-full transition-all duration-300 ${
                        activeIndex === idx
                          ? "w-4 h-4 bg-white"
                          : "w-3 h-3 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
