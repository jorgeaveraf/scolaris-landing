import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import AppExperience from "./components/AppExperience";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20 bg-white text-gray-800">
              <Hero />
              <Features />
              <Pricing />
              <AppExperience />
              <Testimonial />
              <Footer />
            </main>
          }
        />
        <Route
          path="/demo"
          element={
            <div className="min-h-screen flex items-center justify-center text-3xl text-scolBlue">
              Demo próximamente...
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
