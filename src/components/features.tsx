import { Users2, Truck, DollarSign } from "lucide-react";

const features = [
  {
    icon: Users2,
    title: "نصائح الخبراء",
    description:
      "مع أكثر من 10 سنوات من الخبرة في صناعة حمامات السباحة، فإن فريق خدمة العملاء لدينا جاهز لمساعدتك سبعة أيام في الأسبوع.",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description:
      "يتم شحن جميع العناصر المخزنة التي تم طلبها في أيام العمل قبل الساعة 2 مساءً بتوقيت شرق الولايات المتحدة في نفس يوم العمل.",
  },
  {
    icon: DollarSign,
    title: "أسعار منافسة",
    description:
      "هل وجدت سعراً أفضل لأي من العناصر المتوفرة لدينا؟ نقدم لك ضمان حصولك على معدات حمام السباحة الخاصة بك بأفضل سعر.",
  },
];

export default function Features() {
  return (
    <section>
      <div className="container mx-auto lg:px-24 py-4 md:py-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center p-4 md:p-8  rounded-lg transition-all duration-300 ${
                index === 1
                  ? "bg-custom-secondary text-white md:transform md:scale-110 md:shadow-xl md:z-10"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <div
                className={`rounded-full p-4 mb-6 ${
                  index === 1 ? "bg-white/10" : "bg-custom-secondary/10"
                }`}
              >
                <feature.icon
                  className={`size-8 ${
                    index === 1 ? "text-white" : "text-custom-secondary"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p
                className={`text-sm leading-relaxed ${
                  index === 1 ? "text-white/90" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
