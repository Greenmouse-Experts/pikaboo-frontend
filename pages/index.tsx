import Image from "next/image";
import { Inter } from "next/font/google";
import { AppPage } from "@/shared/components/layouts/Types";
import HeroSection from "@/shared/components/homepage/Hero";
import ServicesSection from "@/shared/components/homepage/Services";
import WorksSection from "@/shared/components/homepage/Works";
import ReviewSection from "@/shared/components/homepage/Review";
import AboutSection from "@/shared/components/homepage/About";
import FaqSection from "@/shared/components/homepage/Faq";
import ExtraSection from "@/shared/components/homepage/Extra";


const inter = Inter({ subsets: ["latin"] });

const HomePage: AppPage = () => {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <WorksSection/>
      <ReviewSection/>
      <AboutSection/>
      <FaqSection/>
      <ExtraSection/>
    </>
  );
};

export default HomePage;

HomePage.Layout = "Main";
