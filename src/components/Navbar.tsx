import { FC, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navbar: FC = () => {
  const [hasShadow, setHasShadow] = useState(false);
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

        <div className="hidden md:flex items-center gap-6 text-sm font-sans text-scolBlue">
          <Link to="/features" className="hover:underline">Características</Link>
          <Link to="/pricing" className="hover:underline">Planes</Link>
          <Link to="/contact" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
