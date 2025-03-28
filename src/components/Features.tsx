import { FC } from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureItem[] = [
  {
    title: "Gestión de inscripciones",
    description: "Facilita el proceso de inscripción y evita duplicados.",
    icon: <span className="text-3xl">📝</span>,
  },
  {
    title: "Control de pagos automatizado",
    description: "Cobra, factura y gestiona adeudos de manera eficiente.",
    icon: <span className="text-3xl">💳</span>,
  },
  {
    title: "Dashboards y reportes en tiempo real",
    description: "Toma decisiones con base en datos siempre actualizados.",
    icon: <span className="text-3xl">📊</span>,
  },
];

const Features: FC = () => {
  return (
    <section className="bg-scolGray py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-12">
          Lo que hace especial a Scolaris
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-scolDark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
