import { FC, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navbar: FC = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white py-4 px-6 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo con comportamiento dinámico */}
        <div onClick={handleLogoClick} className="cursor-pointer">
          <Logo />
        </div>

        {/* Botón hamburguesa (solo en mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-scolBlue focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Enlaces en escritorio */}
        <div className="hidden md:flex items-center gap-6 text-sm font-sans text-scolBlue">
          <Link to="/features" className="hover:underline">Características</Link>
          <Link to="/pricing" className="hover:underline">Planes</Link>
          <Link to="/contact" className="hover:underline">Contacto</Link>
        </div>
      </div>

      {/* Enlaces en mobile */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 flex flex-col items-start gap-2 text-scolBlue text-sm font-medium px-1">
          <Link to="/features" onClick={() => setIsMenuOpen(false)} className="hover:underline">Características</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:underline">Planes</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:underline">Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
