import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import AppExperience from "./components/AppExperience";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/common/Modal";
import TrialRequestForm from "./components/forms/TrialRequestForm";
import { Plan } from "./types/Plan";

function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const openTrialModal = () => setIsTrialModalOpen(true);
  const closeTrialModal = () => setIsTrialModalOpen(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  const openPaymentModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setSelectedPlan(null);
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-20 bg-white text-gray-800 relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero openModal={openTrialModal} openVideo={openVideoModal} />
                <Features />
                <Pricing openPaymentModal={openPaymentModal} />
                <AppExperience />
                <Testimonial />
                <Footer openModal={openTrialModal} />
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage openPaymentModal={openPaymentModal} />} />     
        </Routes>
      </main>

      {/* Modal para prueba gratuita */}
      {isTrialModalOpen && (
        <Modal isOpen={isTrialModalOpen} onClose={closeTrialModal} size="md">
          <TrialRequestForm onSuccess={closeTrialModal} />
        </Modal>
      )}

      {/* Modal para video demo */}
      {isVideoModalOpen && (
        <Modal isOpen={isVideoModalOpen} onClose={closeVideoModal} size="xl">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/c0BJRR_TIEI"
              title="Demo Scolaris"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </Modal>
      )}

      {/* Modal para pago */}
      {isPaymentModalOpen && selectedPlan && (
        <Modal isOpen={isPaymentModalOpen} onClose={closePaymentModal} size="md">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-scolBlue">
              Contratar plan {selectedPlan.name}
            </h2>

            <ul className="text-sm text-left list-disc list-inside space-y-1">
              {selectedPlan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href={selectedPlan.monthlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-scolBlue text-white px-6 py-2 rounded-md font-semibold hover:bg-scolDark transition shadow-sm hover:shadow-md"
              >
                Suscripción mensual
              </a>

              <a
                href={selectedPlan.annualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-scolBlue text-white px-6 py-2 rounded-md font-semibold hover:bg-scolDark transition shadow-sm hover:shadow-md"
              >
                Suscripción anual
                <div className="text-xs font-normal leading-tight">
                  Ahorra 10% con hasta 3 MSI
                </div>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Una vez realizado el pago recibirás un correo con los pasos para acceder.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default App;
