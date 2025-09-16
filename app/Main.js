import AppBanner from "@/components/AppBanner";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import WaitList from "@/components/WaitList";
import React from "react";

const Main = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-rich-black via-gray-900 to-rich-black">
      <Header />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Faq />
      <WaitList />
      <AppBanner />
      <Footer />
    </div>
  );
};

export default Main;
