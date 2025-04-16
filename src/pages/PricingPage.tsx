import check from "../assets/check.png";
import { FC, useState } from "react";
import { Plan } from "../types/Plan";
import { Link } from "react-router-dom";


interface PricingPageProps {
  openPaymentModal: (plan: Plan) => void;
}

const pricingData = [
  {
    feature: "Inscripción ágil y sin errores",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Control automático de pagos y adeudos",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Reportes instantáneos clave",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Personalización con tu identidad institucional",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Perfiles personalizados para equipo directivo",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Alertas sobre cobros y pendientes",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Reportes detallados descargables en Excel",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    feature: "Notificaciones de cobro automáticas",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Alertas inteligentes en tiempo real",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Soporte experto personalizado",
    basic: false,
    standard: "Limitado",
    premium: "Ilimitado",
  },
  {
    feature: "Prioridad en soporte técnico",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    feature: "Acceso exclusivo a nuevas funcionalidades",
    basic: false,
    standard: false,
    premium: true,
  },
];

const PricingPage: FC<PricingPageProps> = ({ openPaymentModal }) => {
    const [hoveredColumn, setHoveredColumn] = useState<string | null>("premium");
  
    const getColumnClass = (col: string) => {
      return hoveredColumn === col
        ? "bg-[#e6e6e6] text-gray-900 scale-105 z-10"
        : "bg-white text-gray-800";
    };
  
    const labelMap: Record<string, string> = {
      basic: "Básico",
      standard: "Estándar",
      premium: "Premium",
    };

    const planDetails = {
      basic: {
        name: "Básico",
        price: "$600 / mes",
        description: "Perfecto para escuelas que están comenzando a digitalizar su operación.",
        features: [
          "Hasta 50 alumnos",
          "1 usuario administrador",
          "Gestión de inscripciones y pagos",
          "Acceso a reportes y analíticas",
        ],
        monthlyUrl: import.meta.env.VITE_MERCADOPAGO_URL_BASIC_MONTHLY,
        annualUrl: import.meta.env.VITE_MERCADOPAGO_URL_BASIC_ANNUAL,
        paymentUrl: import.meta.env.VITE_MERCADOPAGO_URL_BASIC, // agregado
      },
      standard: {
        name: "Estándar",
        price: "$1,100 / mes",
        description: "Ideal para escuelas que necesitan orden, control y visibilidad en el día a día.",
        features: [
          "Hasta 100 alumnos",
          "2 usuarios con roles definidos",
          "Personalización de la plataforma",
          "Reportes y analíticas avanzadas",
        ],
        monthlyUrl: import.meta.env.VITE_MERCADOPAGO_URL_STANDARD_MONTHLY,
        annualUrl: import.meta.env.VITE_MERCADOPAGO_URL_STANDARD_ANNUAL,
        paymentUrl: import.meta.env.VITE_MERCADOPAGO_URL_STANDARD, // agregado
      },
      premium: {
        name: "Premium",
        price: "$2,000 / mes",
        description: "Para instituciones que buscan control total, eficiencia y soporte preferente.",
        features: [
          "Hasta 200 alumnos",
          "4 usuarios con control de acceso",
          "Automatizaciones avanzadas",
          "Alertas y notificaciones personalizadas",
          "Acceso anticipado a nuevas funciones",
        ],
        monthlyUrl: import.meta.env.VITE_MERCADOPAGO_URL_PREMIUM_MONTHLY,
        annualUrl: import.meta.env.VITE_MERCADOPAGO_URL_PREMIUM_ANNUAL,
        paymentUrl: import.meta.env.VITE_MERCADOPAGO_URL_PREMIUM, // agregado
      },
    };    
    
  
    return (
      <section className="py-20 px-4 max-w-6xl mx-auto text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-scolBlue text-center mb-12">
          Comparativa de Planes
        </h1>

        <div className="text-center mb-12">
        <Link
          to="/servicios"
          className="block bg-scolLight/10 border border-scolBlue rounded-xl p-5 text-center shadow hover:shadow-md hover:scale-105 transition max-w-md mx-auto mb-12"
        >
          <p className="text-scolBlue font-bold text-lg mb-1">¿Necesitas más funcionalidades?</p>
          <p className="text-sm text-gray-600 mb-2">Descubre nuestros servicios adicionales como bots, recordatorios y más.</p>
          <span className="inline-block bg-scolBlue text-white px-4 py-1 text-sm rounded-full mt-2">
            Ver Servicios Adicionales
          </span>
        </Link>

        </div>

    
        {/* Desktop: Tabla completa */}
        <div className="hidden md:block">
          <div className="overflow-y-scroll max-h-[70vh] scrollbar-hide">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead className="sticky top-0 z-20 bg-scolSky shadow-sm">
                <tr className="bg-scolSky text-white">
                  <th className="text-left px-4 py-3 font-semibold">Beneficios incluidos</th>
                  {["basic", "standard", "premium"].map((key) => (
                    <th
                      key={key}
                      className="px-4 py-3 font-semibold cursor-pointer"
                      onMouseEnter={() => setHoveredColumn(key)}
                    >
                      {labelMap[key]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-scolGray/40"}>
                    <td className="px-4 py-3 text-left align-top">{item.feature}</td>
                    {["basic", "standard", "premium"].map((key) => (
                      <td
                        key={key}
                        className={`px-4 py-3 text-center transition-all duration-300 ${getColumnClass(key)}`}
                        onMouseEnter={() => setHoveredColumn(key)}
                      >
                        {item[key as keyof typeof item] === true ? (
                          <img src={check} alt="check" className="h-5 w-5 inline" />
                        ) : typeof item[key as keyof typeof item] === "string" ? (
                          <span className="font-semibold">
                            {item[key as keyof typeof item]}
                          </span>
                        ) : (
                          "–"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
    
                {/* Botones (desktop) */}
                <tr className="sticky bottom-0 bg-white z-20 shadow-md">
                  <td className="px-4 py-4"></td>
                  {["basic", "standard", "premium"].map((key, idx) => (
                    <td key={idx} className="px-4 py-4 text-center">
                      <button
                        className={`bg-scolBlue text-white font-semibold px-4 py-2 rounded-full transition-transform duration-300
                        hover:bg-scolDark hover:scale-105 hover:shadow-lg
                        ${hoveredColumn === key ? "scale-110 shadow-xl" : ""}`}
                        onClick={() => openPaymentModal(planDetails[key as keyof typeof planDetails])}
                      >
                        Contratar {labelMap[key]}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    
        {/* Mobile: Tarjetas apiladas */}
        <div className="md:hidden space-y-6">
          {pricingData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-scolBlue mb-2">{item.feature}</h3>
              <ul className="divide-y divide-gray-200 text-sm">
                {["basic", "standard", "premium"].map((key) => (
                  <li key={key} className="py-2 flex justify-between items-center">
                    <span className="font-medium">{labelMap[key]}</span>
                    <span>
                      {item[key as keyof typeof item] === true ? (
                        <img src={check} alt="check" className="h-5 w-5" />
                      ) : typeof item[key as keyof typeof item] === "string" ? (
                        <span className="font-semibold">{item[key as keyof typeof item]}</span>
                      ) : (
                        "–"
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
    
          {/* Botones (mobile sticky) */}
          <div className="md:hidden sticky bottom-0 z-30 bg-white border-t pt-3 pb-4 px-4">
          <p className="text-center italic text-gray-600 mb-2">Contratar</p>
            <div className="flex justify-between gap-2">
              {["basic", "standard", "premium"].map((key) => (
                <button
                  key={key}
                  className="flex-1 bg-scolBlue text-white text-sm font-medium px-2 py-2 rounded-full hover:bg-scolDark transition whitespace-nowrap"
                  onClick={() => openPaymentModal(planDetails[key as keyof typeof planDetails])}
                >
                  {labelMap[key]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };    
  
  export default PricingPage;