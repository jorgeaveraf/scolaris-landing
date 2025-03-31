import { FC } from "react";

interface Plan {
  name: string;
  price: string;
  features: string[];
  description: string;
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    name: "Básico",
    price: "$600 / mes",
    description: "Perfecto para escuelas que están comenzando a digitalizar su operación.",
    features: [
      "Hasta 50 alumnos",
      "1 usuario administrador",
      "Gestión de inscripciones y pagos",
      "Acceso a reportes y analíticas",
    ],
  },
  {
    name: "Estándar",
    price: "$1,100 / mes",
    description: "Ideal para escuelas que necesitan orden, control y visibilidad en el día a día.",
    features: [
      "Hasta 100 alumnos",
      "2 usuarios con roles definidos",
      "Personalización de la plataforma",
      "Reportes y analíticas avanzadas",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$2,000 / mes",
    description: "Para instituciones que buscan control total, eficiencia y soporte preferente.",
    features: [
      "Hasta 200 alumnos",
      "4 usuarios con control de acceso",
      "Automatizaciones avzanzadas",
      "Alertas y notificaciones personalizadas",
      "Acceso anticipado a nuevas funciones",
    ],
  },
];

const Pricing: FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-12">
          Planes para cada tipo de escuela
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md p-6 border transition flex flex-col justify-between ${
                plan.highlight
                  ? "bg-scolSky text-white border-scolBlue scale-105"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-xl font-bold mb-2">{plan.price}</p>
                <p
                  className={`text-sm mb-4 ${
                    plan.highlight ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="text-sm mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-2 rounded font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-scolBlue hover:bg-gray-100"
                    : "bg-scolBlue text-white hover:bg-scolDark"
                }`}
              >
                Contratar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
