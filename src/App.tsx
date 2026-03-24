import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import FoodSection from "@/components/FoodSection";
import PackagesSection from "@/components/PackagesSection";
import WorldMap from "@/components/WorldMap";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageTransition from "@/components/PageTransition";
import DestinationDetail from "@/pages/DestinationDetail";

function HomePage() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <WorldMap />
      <FoodSection />
      <PackagesSection />
      <AboutSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
        </Routes>
      </PageTransition>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
