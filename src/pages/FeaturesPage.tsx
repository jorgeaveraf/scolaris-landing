import { FC } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import featureImage from "../assets/person.svg";
import featurePage_1 from "../assets/featurePage_1.png";
import featurePage_2 from "../assets/featurePage_2.png";
import featurePage_3 from "../assets/featurePage_3.png";
import featurePage_4 from "../assets/featurePage_4.png";
import featurePage_5 from "../assets/featurePage_5.png";
import featurePage_6 from "../assets/featurePage_6.png";
import featurePage_7 from "../assets/featurePage_7.png";
import featurePage_8 from "../assets/featurePage_8.png";

const features = [
  {
    title: "Control total, simplicidad absoluta",
    icon: featurePage_1,
    description:
      "Gestiona inscripciones, cobros y reportes desde un solo panel amigable y fácil de entender, diseñado específicamente para facilitar tu día a día.",
  },
  {
    title: "Reportes inteligentes, decisiones acertadas",
    icon: featurePage_2,
    description:
      "Obtén reportes instantáneos y análisis claros que te permitan tomar decisiones rápidas y precisas, anticipándote a las necesidades de tu escuela.",
  },
  {
    title: "Automatización que trabaja por ti",
    icon: featurePage_3,
    description:
      "Elimina tareas repetitivas gracias a procesos automáticos y alertas inteligentes. Gana tiempo valioso para enfocarte en lo realmente importante: tus alumnos.",
  },
  {
    title: "Soporte humano y cercano, siempre contigo",
    icon: featurePage_4,
    description:
      "Tienes a tu disposición un equipo de expertos que entiende tus desafíos y te acompaña hasta resolver cada una de tus inquietudes.",
  },
  {
    title: "Seguridad total",
    icon: featurePage_5,
    description:
      "Protegemos la información sensible de tu institución con altos estándares de seguridad y protocolos actualizados constantemente.",
  },
  {
    title: "Personalización para tu escuela",
    icon: featurePage_6,
    description:
      "Adapta ScolarisQ a la identidad institucional de tu escuela y vive una experiencia personalizada.",
  },
  {
    title: "Actualizaciones constantes y gratuitas",
    icon: featurePage_7,
    description:
      "Siempre tendrás acceso a nuevas funciones y mejoras continuas, manteniendo tu escuela a la vanguardia.",
  },
  {
    title: "Movilidad total y acceso ilimitado",
    icon: featurePage_8,
    description:
      "Administra tu escuela desde cualquier dispositivo, estés donde estés, con la tranquilidad de saber que siempre tendrás el control.",
  },
];

const FeaturesPage: FC = () => {
  const { ref, inView } = useSectionInView<HTMLDivElement>();

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-gray-800">
      <div
        ref={ref}
        className={`flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-20 transition-all duration-700 ${
          inView ? "opacity-100 blur-0 scale-100" : "opacity-50 blur-sm scale-[0.98]"
        }`}
      >
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-4">
            Todo lo que necesitas,<br className="hidden md:block" /> en un solo lugar
          </h2>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            ScolarisQ no solo facilita tu trabajo diario, sino que transforma la manera en la que gestionas tu escuela. Estas son las razones por las que las instituciones confían en nosotros.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={featureImage}
            alt="Características de ScolarisQ"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Grid de características */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <img src={f.icon} alt={f.title} className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-scolBlue mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPage;
