import Hero from "@/components/hero";
import Header from "@/components/layout/header";
import { getHeroSlides } from "./actions/get-hero-slides";
import Features from "@/components/features";
import ArrivalProducts from "@/components/arrival-products";
import BestSelling from "@/components/best-selling";
import About from "@/components/about";
import ProductSectoin from "@/components/product";
import VideoProfileSection from "@/components/video-profile-section";
import ServicesSection from "@/components/services-seciton";
import StatisticsSection from "@/components/statistics-section";
import BlogSection from "@/components/blog-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default async function Home() {
  const slides = await getHeroSlides();

  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <Hero slides={slides} />
        {/* Features section with negative margin to create overlap */}
        {/* 2xl:mb-[-15vh] */}
        <div className="lg:relative  lg:-mt-[20vh]    lg:mb-[-25vh] lg:z-20 px-4 ">
          <Features />
        </div>
        <ArrivalProducts />
        <BestSelling />
        <About />
        <ProductSectoin />
        <VideoProfileSection />
        <ServicesSection />
        <StatisticsSection />
        <BlogSection />
        <NewsletterSection />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
}
