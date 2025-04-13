import { FC } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import dashboard from "../assets/dashboard.svg";
import checkIcon from "../assets/check.png";

const AppExperience: FC = () => {
  const { ref, inView } = useSectionInView();

  return (
    <section
      ref={ref}
      id="experience"
      className={`bg-scolGray py-20 px-6 transition-all duration-700 ${
        inView ? "opacity-100 blur-0 scale-100" : "opacity-40 blur-sm scale-[0.98]"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-4">
            Una app que funciona para todos
          </h2>
          <p className="text-base text-gray-700 mb-6 font-sans">
            Ya sea desde computadora, celular o tablet, ScolarisQ te permite
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
        <div
          className={`flex justify-center transition-all duration-700 ease-out transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
        >
          <img
            src={dashboard}
            alt="Dashboard ScolarisQ"
            className="max-w-sm w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AppExperience;
