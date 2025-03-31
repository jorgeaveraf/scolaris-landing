import { FC } from "react";
import { Link } from "react-router-dom"; // si usarás react-router
import logo from "../assets/logo.svg";

const Logo: FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="Scolaris Logo" className="h-10 md:h-12 w-auto" />
      {/* Puedes incluir el nombre si lo deseas */}
      {/* <span className="text-xl font-avenir text-scolBlue font-bold">Scolaris</span> */}
    </Link>
  );
};

export default Logo;
