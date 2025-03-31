import { FC } from "react";
import Logo from "./Logo";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 px-6 z-50">
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
