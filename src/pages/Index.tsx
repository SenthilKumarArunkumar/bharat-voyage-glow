import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrendingDestinations from "@/components/TrendingDestinations";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrendingDestinations />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
