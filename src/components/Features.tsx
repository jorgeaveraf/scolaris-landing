import { FC } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import enroll from "../assets/enroll.png";
import payment from "../assets/pay.png";
import analytics from "../assets/graph.gif";

const features = [
  {
    icon: enroll,
    title: "Inscripciones simples y centralizadas",
    description: "Ordena y registra fácilmente todos los alumnos sin duplicados.",
  },
  {
    icon: payment,
    title: "Gestión de pagos internos",
    description: "Controla adeudos y estados de cuenta por estudiante.",
  },
  {
    icon: analytics,
    title: "Reportes en tiempo real",
    description: "Visualiza información clave para tomar mejores decisiones.",
  },
];

const Features: FC = () => {
  const { ref, inView } = useSectionInView();

  return (
    <section
      id="features"
      ref={ref}
      className={`transition-all duration-700 py-20 px-6 ${
        inView ? "opacity-100 blur-0 scale-100" : "opacity-40 blur-sm scale-[0.98]"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-12">
          Lo que hace especial a Scolaris
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              className={`bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center transition-all duration-700 ease-out transform
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                hover:shadow-md`}
            >
              <img src={feature.icon} alt="" className="h-16 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-scolDark">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
