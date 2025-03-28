import { FC } from "react";

interface Plan {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    name: "Básico",
    price: "$600 / mes",
    features: [
      "Hasta 50 alumnos",
      "1 usuario",
      "Inscripciones y pagos básicos",
    ],
  },
  {
    name: "Estándar",
    price: "$1,100 / mes",
    features: [
      "Hasta 100 alumnos",
      "2 usuarios con roles",
      "Campos personalizados",
      "Reportes descargables",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$2,000 / mes",
    features: [
      "Hasta 200 alumnos",
      "4 usuarios con control de acceso",
      "Automatización avanzada",
      "Soporte prioritario",
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
              className={`rounded-xl shadow-md p-6 border ${
                plan.highlight
                  ? "bg-scolSky text-white border-scolBlue scale-105"
                  : "bg-white text-gray-800 border-gray-200"
              } transition`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-xl font-bold mb-6">{plan.price}</p>
              <ul className="text-sm mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded ${
                  plan.highlight
                    ? "bg-white text-scolBlue font-bold"
                    : "bg-scolBlue text-white"
                } hover:opacity-90 transition`}
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
