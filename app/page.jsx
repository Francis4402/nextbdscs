import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import HowitWorks from "./components/HowitWorks";
import QuestionSection from "./components/QuestionSection";
import ServicesSection from "./components/ServicesSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <div className="flex justify-center">
        <div className="container md:px-0 px-5">
          <ServicesSection />
          <AboutSection/>
          <VideoSection/>
        </div>
      </div>

      <HowitWorks/>

      <QuestionSection />
    </div>
  );
}
