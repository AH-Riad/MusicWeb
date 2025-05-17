import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import TestimonialCards from "./components/TestimonialCards";
import UpcomingWebinars from "@/app/components/UpcomingWebinars";
import WhyChooseUs from "./ui/WhyChooseUs";
import Instructors from "./components/Instructors";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
