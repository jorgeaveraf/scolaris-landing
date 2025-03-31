import { FC } from "react";
import dashboard from "../assets/dashboard.svg";
import checkIcon from "../assets/check.png";

const AppExperience: FC = () => {
  return (
    <section className="bg-scolGray py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-4">
            Una app que funciona para todos
          </h2>
          <p className="text-base text-gray-700 mb-6 font-sans">
            Ya sea desde computadora, celular o tablet, Scolaris te permite
            gestionar tu escuela de forma sencilla, estés donde estés.
          </p>

          {/* Lista con íconos */}
          <ul className="space-y-4">
            {[
              "Accede desde cualquier dispositivo",
              "Sin instalaciones complicadas",
              "Experiencia intuitiva para todos los usuarios",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <img
                  src={checkIcon}
                  alt="check"
                  className="h-6 w-6 mt-1 shrink-0"
                />
                <span className="text-gray-800 text-sm font-medium leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={dashboard}
            alt="Dashboard Scolaris"
            className="max-w-sm w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AppExperience;
