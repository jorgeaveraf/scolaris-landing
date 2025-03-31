import { FC } from "react";
import person from "../assets/person.svg";
import payment from "../assets/payment.svg";
import analytics from "../assets/analytics.svg";

const features = [
  {
    icon: person,
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
  return (
    <section id="features" className="bg-scolGray py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-12">
          Lo que hace especial a Scolaris
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
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
