import { NavLink, useLocation } from "react-router-dom";
import intro from "../../assets/menuIcon_1.png";
import home from "../../assets/menuIcon_2.png";
import periods from "../../assets/menuIcon_5.png";
import tutors from "../../assets/menuIcon_4.png";
import alumnos from "../../assets/menuIcon_3.png";
import pay from "../../assets/menuIcon_6.png";
import enrollIcon from "../../assets/enroll.png";
import analytics from "../../assets/featurePage_2.png";
import report from "../../assets/menuIcon_8.png";
import alert from "../../assets/menuIcon_7.png";

interface ManualsMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ManualsMenu = ({ isOpen, setIsOpen }: ManualsMenuProps) => {
  const location = useLocation();

  const mainLinks = [
    { icon: intro, text: "Introducción", to: "/manuales" },
    { icon: home, text: "Home", to: "/manuales/home" },
    { icon: periods, text: "Periodos", to: "/manuales/periodos" },
    { icon: tutors, text: "Tutores", to: "/manuales/tutores" },
    { icon: alumnos, text: "Alumnos", to: "/manuales/alumnos" },
    { icon: enrollIcon, text: "Inscripciones", to: "/manuales/inscripciones" },
    { icon: pay, text: "Pagos", to: "/manuales/pagos" },
  ];
  

  const homeSubLinks = [
    { icon: analytics, text: "Analíticas", to: "/manuales/home/analiticas" },
    { icon: report, text: "Reportes", to: "/manuales/home/reportes" },
    { icon: alert, text: "Alertas", to: "/manuales/home/alertas" },
  ];  

  const isInsideHome = location.pathname.startsWith("/manuales/home");

  return (
    <div>
    {/* Botón solo en móvil */}
    <button
      className="md:hidden text-scolBlue font-semibold tracking-wide underline underline-offset-2"
      onClick={() => setIsOpen(!isOpen)}
    >
    </button>

    {/* Menú lateral */}
    <div className="space-y-2 text-scolBlue font-medium">
      {mainLinks.map((link) => (
        <div key={link.to}>
          <NavLink
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                isActive ? "bg-blue-100 font-bold" : "hover:bg-blue-50"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <img src={link.icon} alt={link.text} className="w-5 h-5" />
            {link.text}
          </NavLink>

          {link.to === "/manuales/home" && isInsideHome && (
            <div className="ml-4 mt-1 space-y-1">
              {homeSubLinks.map((sublink) => (
                <NavLink
                  key={sublink.to}
                  to={sublink.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-1 text-sm rounded-md transition ${
                      isActive ? "bg-blue-100 font-bold" : "hover:bg-blue-50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <img src={sublink.icon} alt={sublink.text} className="w-4 h-4" />
                  {sublink.text}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
};

export default ManualsMenu;
