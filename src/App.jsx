import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import SellChannelsSection from './components/SellChannelsSection';
import ProductsSection from './components/ProductsSection';
import PricingSection from './components/PricingSection';
import DownloadSection from './components/DownloadSection';
import OffersSection from './components/OffersSection';
import VideoSection from './components/VideoSection';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyDifferentSection from './components/WhyDifferentSection';
import ResultsVideoSection from './components/ResultsVideoSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import SuccessPage from './components/SuccessPage';

// الصفحة الرئيسية
const HomePage = () => (
  <>
    <HeroSection />
    <div className="section-divider"></div>
    <CoursesSection />
    <div className="section-divider"></div>
    <SellChannelsSection />
    <div className="section-divider"></div>
    <ProductsSection />
    <div className="section-divider"></div>
    <PricingSection />
    <div className="section-divider"></div>
    <DownloadSection />
    <div className="section-divider"></div>
    <OffersSection />
    <div className="section-divider"></div>
    <VideoSection />
    <div className="section-divider"></div>
    <CTASection />
    <div className="section-divider"></div>
    <TestimonialsSection />
    <div className="section-divider"></div>
    <WhyDifferentSection />
    <div className="section-divider"></div>
    <ResultsVideoSection />
    <div className="section-divider"></div>
    <FAQSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
