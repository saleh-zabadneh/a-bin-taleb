import Image from "next/image";

interface Statistic {
  number: string;
  label: string;
}

const statistics: Statistic[] = [
  {
    number: "5+",
    label: "بلدان",
  },
  {
    number: "45+",
    label: "عاما من الخبرة",
  },
  {
    number: "1+ M",
    label: "عملائنا",
  },
  {
    number: "25K",
    label: "مشروع",
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative bg-[#0575DA] overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/ornament.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-40 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-white text-center">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
              </span>
              <span className="text-lg md:text-xl">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="container mx-auto px-4 lg:px-40 h-full">
          <div className="hidden md:grid grid-cols-4 h-full">
            <div className="border-r border-white/20" />
            <div className="border-r border-white/20" />
            <div className="border-r border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
