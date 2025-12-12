import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/About';
import AviationPrograms from './components/AviationPrograms';
import TechPrograms from './components/TechPrograms';
import WhyAkhurath from './components/WhyAkhurath';
import SuccessStats from './components/SuccessStats';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingEnquiryButton";



import { Routes, Route } from 'react-router-dom';

// Full pages
import AboutPage from './About/about';
import AdmissionsPage from './admissions/admissions';
import PlacementsPage from './placements/placements';
import ContactPage from './contact/contact';
import AviationProgramsPage from './programs/aviation/aviation';
import TechProgramsPage from './programs/tech/tech';
import CyberProgramsPage from './programs/cyber/cyber';
import AirportGroundStaffPage from './programs/aviation/airport-ground-staff';
import CabinCrewPage from './programs/aviation/cabin-crew';
import AirportCustomerServicePage from './programs/aviation/airport-customer-service';
import AviationHospitalityPage from './programs/aviation/aviation-hospitality';
import AirlineTicketingPage from './programs/aviation/airline-ticketing-gds';
import AIPromptEngineeringPage from './programs/tech/ai-prompt-engineering';
import DataAnnotationPage from './programs/tech/data-annotation-ai-model';
import AIToolsNoCodePage from './programs/tech/ai-tools-no-code';
import PythonForAIPage from './programs/tech/python-for-ai';
import DigitalMarketingAIPage from './programs/tech/digital-marketing-ai';
import AIGraphicDesignPage from './programs/tech/ai-graphic-design';
import CybersecurityFundamentalsPage from './programs/cyber/cybersecurity-fundamentals';
import EthicalHackingEssentialsPage from './programs/cyber/ethical-hacking-essentials';
import SOCAnalystLevel1Page from './programs/cyber/soc-analyst-level-1';
import NetworkSecurityLinuxAdminPage from './programs/cyber/network-security-linux-admin';
import BugBountyFreelanceHackingPage from './programs/cyber/bug-bounty-freelance-hacking';
import CyberForensicsIncidentResponsePage from './programs/cyber/cyber-forensics-incident-response';


// -------- HOME PAGE --------
function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <AviationPrograms />
      <TechPrograms />
      <WhyAkhurath />
      <SuccessStats />
      <Testimonials />
      <CTABanner />

      <FloatingWhatsApp />
    </div>
  );
}

// -------- APP WITH ROUTES --------
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* 🔥 Scroll to top on every route change */}

      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs/aviation" element={<AviationProgramsPage />} />
          <Route path="/programs/tech" element={<TechProgramsPage />} />
          <Route path="/programs/cyber" element={<CyberProgramsPage />} />

          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Aviation Programs */}
          <Route path="/programs/aviation/airport-ground-staff" element={<AirportGroundStaffPage />} />
          <Route path="/programs/aviation/cabin-crew" element={<CabinCrewPage />} />
          <Route path="/programs/aviation/airport-customer-service" element={<AirportCustomerServicePage />} />
          <Route path="/programs/aviation/aviation-hospitality" element={<AviationHospitalityPage />} />
          <Route path="/programs/aviation/airline-ticketing-gds" element={<AirlineTicketingPage />} />

          {/* Tech Programs */}
          <Route path="/programs/tech/ai-prompt-engineering" element={<AIPromptEngineeringPage />} />
          <Route path="/programs/tech/data-annotation-ai-model" element={<DataAnnotationPage />} />
          <Route path="/programs/tech/ai-tools-no-code" element={<AIToolsNoCodePage />} />
          <Route path="/programs/tech/python-for-ai" element={<PythonForAIPage />} />
          <Route path="/programs/tech/digital-marketing-ai" element={<DigitalMarketingAIPage />} />
          <Route path="/programs/tech/ai-graphic-design" element={<AIGraphicDesignPage />} />

          {/* Cyber Programs */}
          <Route path="/programs/cyber/cybersecurity-fundamentals" element={<CybersecurityFundamentalsPage />} />
          <Route path="/programs/cyber/ethical-hacking-essentials" element={<EthicalHackingEssentialsPage />} />
          <Route path="/programs/cyber/soc-analyst-level-1" element={<SOCAnalystLevel1Page />} />
          <Route path="/programs/cyber/network-security-linux-admin" element={<NetworkSecurityLinuxAdminPage />} />
          <Route path="/programs/cyber/bug-bounty-freelance-hacking" element={<BugBountyFreelanceHackingPage />} />
          <Route path="/programs/cyber/cyber-forensics-incident-response" element={<CyberForensicsIncidentResponsePage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
