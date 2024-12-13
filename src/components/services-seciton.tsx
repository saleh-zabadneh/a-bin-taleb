"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/rotana.jpg", alt: "Rotana" },
  { src: "/hero.jpg", alt: "Service 2" },
  { src: "/hero.jpg", alt: "Service 3" },
  // Add more images as needed
];

export default function ServicesSection() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className=" overflow-hidden">
      <div className="container relative mx-auto px-4 lg:px-40 py-12">
        <div className="grid grid-cols-1 max-h-[403px] lg:grid-cols-12 gap-8 items-start">
          {/* Main image with slider */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[12/12] h-[403px] w-full">
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                fill
                className="relative z-10 object-cover rounded-sm"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    activeImage === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 h-[403px] max-w-[674px] rounded-lg shadow-[0_78px_34px_-45px_rgba(0,0,0,0.15)] flex flex-col justify-around px-6 py-6 bg-custom-background-light">
            <div className="space-y-2">
              <span className="text-sm font-medium text-custom-secondary">
                منتجات الجديدة
              </span>
              <div className="flex gap-1">
                <div className="h-1 rounded-md w-2 bg-custom-secondary" />
                <div className="h-1 rounded-md w-4 bg-custom-secondary" />
                <div className="h-1 rounded-md w-8 bg-custom-secondary" />
              </div>
            </div>
            <h2 className="text-4xl leading-tight text-custom-dark-veryDark">
              اكتشف أحدث الابتكارات في مجال تجهيزات المسابح
            </h2>
            <p className="text-custom-dark-light leading-relaxed">
              من حلول التنظيف المبتكرة إلى معدات الصيانة الحديثة، هذه الإضافات
              الجديدة موجودة هنا لضمان بقاء حمام السباحة الخاص بك واحة متألقة.
            </p>
            <Button className="bg-custom-secondary rounded-none px-6 py-4 h-[56px] w-[125px] hover:bg-custom-secondary/90 text-white">
              التفاصيل
            </Button>
          </div>
          {/* Wave Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 right-20 lg:w-full lg:h-2/3 w-2/3 h-1/3">
              <Image
                src="/wave.png"
                alt="Wave background"
                fill
                quality={100}
                style={{
                  maskImage:
                    "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
                  WebkitMaskImage:
                    "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
