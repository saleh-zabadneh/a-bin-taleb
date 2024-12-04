import Hero from "@/components/hero";
import Header from "@/components/layout/header";
import { getHeroSlides } from "./actions/get-hero-slides";
// import Features from "@/components/features";

export default async function Home() {
  const slides = await getHeroSlides();

  return (
    <div className="">
      <Header />
      <div className="relative">
        <Hero slides={slides} />
        {/* <Features /> */}
      </div>
    </div>
  );
}
