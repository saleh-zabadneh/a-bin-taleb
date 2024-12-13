import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-custom-background-third overflow-hidden ">
      <div className="container relative   mx-auto px-4 lg:px-40 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -left-4 -top-4 w-full h-full bg-custom-border" />
            <Image
              src="/about.png"
              alt="about"
              width={487}
              height={577}
              className="relative z-10 object-cover h-[576.74px] w-[487px] rounded-sm filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-7 h-[412px] max-w-[674px] rounded-lg shadow-[0_78px_34px_-45px_rgba(0,0,0,0.15)] flex flex-col justify-around px-6 py-6 bg-custom-background-light">
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

          {/* Bottom images */}
          <div className="lg:col-span-9  grid grid-cols-3 gap-4 md:-mt-24 z-50">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 1 ? "" : index === 2 ? "" : ""
                }`}
              >
                <Image
                  src="/about.png"
                  alt=""
                  width={286}
                  height={161}
                  className="object-cover h-[161.28px] w-full rounded-sm filter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
                />
              </div>
            ))}
          </div>

          {/* Wave Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 right-0 lg:w-full lg:h-2/3 w-1/2 h-1/3">
              <Image
                src="/wave.png"
                alt="Wave background"
                fill
                quality={100}
                className="object-cover object-right-bottom"
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
