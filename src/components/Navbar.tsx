import { FC, useEffect, useState } from "react";
import Logo from "./Logo";

const Navbar: FC = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10); // activa cuando se baja un poco
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white py-4 px-6 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        {/* Navegación futura */}
        <div className="hidden md:flex items-center gap-6 text-sm font-sans text-scolBlue">
          <a href="#features" className="hover:underline">Características</a>
          <a href="#pricing" className="hover:underline">Planes</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
