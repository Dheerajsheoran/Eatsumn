import Footer from "@/components/common/Footer";
import Hero from "@/components/Hero";
import HowWeAutomate from "@/components/HowWeAutomate";
import Ourclient from "@/components/Ourclient";
import OurFeatures from "@/components/OurFeatures";
import Receive from "@/components/Receive";
import Sliderpage from "@/components/Sliderpage";

export default function Home() {
  return (
    <>
      <Hero />
      <Sliderpage />
      <HowWeAutomate />
      <OurFeatures />
      <Ourclient />
      <Receive />
      <Footer />
    </>
  );
}
