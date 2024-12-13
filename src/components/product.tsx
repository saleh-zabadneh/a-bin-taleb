import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProductCategory {
  icon: string;
  title: string;
  count: number;
  isMain?: boolean;
}

const categories: ProductCategory[] = [
  {
    icon: "/product-icon-1.png",
    title: "كل المنتجات",
    count: 320,
    isMain: true,
  },
  {
    icon: "/product-icon-2.png",
    title: "سخانات المياه",
    count: 14,
  },
  {
    icon: "/product-icon-3.png",
    title: "منظف المياه",
    count: 14,
  },
  {
    icon: "/product-icon-4.png",
    title: "مضخات المسابح",
    count: 21,
  },
  {
    icon: "/product-icon-5.png",
    title: "حلول التدفئة",
    count: 21,
  },
  {
    icon: "/product-icon-6.png",
    title: "منظمات المسابح",
    count: 21,
  },
  {
    icon: "/product-icon-7.png",
    title: "أنظمة الترشيح",
    count: 21,
  },
  {
    icon: "/product-icon-8.png",
    title: "أجهزة إنذار المسابح",
    count: 21,
  },
];

export default function ProductSection() {
  return (
    <section className="container py-8 lg:py-16 px-4 md:px-8 xl:px-40 mx-auto overflow-hidden">
      {/* Main Grid Container */}
      <div className="grid gap-12">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Ornament Background */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/ornament.png"
              alt="Background Ornament"
              fill
              className="object-contain rotate-[152.26deg]"
            />
          </div>

          {categories.map((category, index) => (
            <Card
              key={index}
              className={`flex items-center h-[60px] md:h-[78px] rounded-full justify-between px-4 md:px-6 py-2 md:py-4 cursor-pointer transition-all hover:shadow-lg ${
                category.isMain
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex flex-col items-end">
                <span className="text-xs md:text-sm mb-1">
                  {category.count} منتج
                </span>
                <h3 className="text-sm md:text-lg font-medium">
                  {category.title}
                </h3>
              </div>
              <div
                className={`w-[40px] h-[40px] md:w-[54px] md:h-[54px] rounded-full flex items-center justify-center ${
                  category.isMain ? "bg-white" : "bg-[#2895C8]"
                }`}
              >
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={25}
                  height={25}
                  className={category.isMain ? "text-blue-500" : "text-white"}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Banner Section */}
        <div className="grid grid-cols-1 relative overflow-hidden min-h-[400px] ">
          {/* Background Image */}
          <Image
            src="/product.png"
            alt="Pool simulation"
            fill
            className="object-cover"
          />

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 relative z-10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            {/* Discount Badge */}
            <div className="col-span-1 md:col-span-3 relative flex items-center justify-center p-4">
              <div className="relative w-32 h-32 md:w-44 md:h-44">
                <Image fill src="/offer-bg.png" alt="offer-background" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-lg md:text-xl">توفير</div>
                  <span className="text-4xl md:text-5xl font-bold">50%</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-span-1 md:col-span-7 bg-custom-dark-veryDark/60 p-6 md:p-8 lg:p-12 flex flex-col items-start text-white">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                برنامج محاكاة أدوات المسابح
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                برنامج محاكاة متطور
              </h3>
              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                برنامج محاكاة أدوات المسابح هو برنامج مصمم لمحاكاة وتجربة
                استخدام مجموعة من الأدوات والمعدات المستخدمة في المسابح. الهدف
                الأساسي من هذا النوع من البرامج هو توفير بيئة افتراضية تسمح
                للمستخدم بتعلم كيفية استخدام وصيانة هذه الأدوات دون الحاجة إلى
                تواجد فعلي في المسبح.
              </p>
              <div className="flex gap-4 rtl">
                <Button
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20 border-white text-sm md:text-base"
                >
                  التفاصيل
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600 text-sm md:text-base">
                  تجربة الآن
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
