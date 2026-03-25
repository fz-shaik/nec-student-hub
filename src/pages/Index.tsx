import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import StudentDirectory from "@/components/StudentDirectory";
import StudentSearchSection from "@/components/StudentSearchSection";
import NoticesSection from "@/components/NoticesSection";
import PlacementsSection from "@/components/PlacementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StudentSearchSection />
      <DepartmentsSection />
      <StudentDirectory />
      <NoticesSection />
      <PlacementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
