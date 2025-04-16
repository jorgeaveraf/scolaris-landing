import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Logo: FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={logo}
        alt="ScolarisQ Logo"
        className="h-[3.5rem] md:h-[4rem] max-h-[4rem] w-auto"
      />
    </Link>
  );
};

export default Logo;
