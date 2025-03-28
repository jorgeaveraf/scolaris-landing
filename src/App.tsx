import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import AppExperience from "./components/AppExperience";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Hero />
      <Features />
      <Pricing />
      <AppExperience />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default App;
