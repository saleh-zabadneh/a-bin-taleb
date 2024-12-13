import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "منتجات ترفيهية",
    price: 2400.0,
    originalPrice: 3200,
    image: "/arrival-product-1.png",
  },
  {
    id: 2,
    title: "تجهيزات للراحة",
    price: 2400.0,
    originalPrice: 3200,
    image: "/arrival-product-2.png",
  },
];

export default function ArrivalProducts() {
  return (
    // 2xl:pt-[25vh]
    <section className="relative pt-[5vh]   lg:pt-[35vh]    overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Background Image with mask */}
      <div className="absolute inset-0">
        <Image
          src="/arrival-products.png"
          alt="arrival-products"
          fill
          quality={100}
          priority
          className="object-cover object-center"
        />
        {/* Mask for the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col  lg:flex-row gap-8 items-start">
          {/* Product Cards */}
          <div className="flex-1 w-full grid sm:grid-cols-2  grid-cols-1 md:grid-cols-2  gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-sm group  "
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={900}
                  height={900}
                  className="w-full  sm:w-[392] sm:h-[407] object-cover  rounded-sm filter drop-shadow-[2px_2px_12px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute bottom-0 left-0 w-10/12 right-0 bg-[#1E1E1E]/85 p-6 transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-custom-secondary text-lg font-bold">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-[40%] space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-medium text-custom-secondary">
                منتجات الجديدة
              </span>
              <div className="flex gap-1">
                <div className="h-1 rounded-md w-6 bg-white" />
                <div className="h-1 rounded-md w-12 bg-white" />
                <div className="h-1 rounded-md w-24 bg-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-white">
              اكتشف أحدث الابتكارات في مجال تجهيزات المسابح
            </h2>
            <p className="text-gray-200 leading-relaxed">
              من حلول التنظيف المبتكرة إلى معدات الصيانة الحديثة، هذه الإضافات
              الجديدة موجودة هنا لضمان بقاء حمام السباحة الخاص بك واحة متألقة.
            </p>
            <Button className="bg-custom-secondary rounded-none px-8 py-6 hover:bg-custom-secondary/90 text-white">
              مشاهدة المزيد
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
