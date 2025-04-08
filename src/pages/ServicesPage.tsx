import { FC, use, useState } from "react";
import users from "../assets/menuIcon_4.png";
import adeudo from "../assets/menuIcon_7.png";
import bot from "../assets/featurePage_3.png";
import alumno from "../assets/menuIcon_3.png";
import pago from "../assets/menuIcon_6.png";
import correo from "../assets/enroll.png";
import soporte from "../assets/featurePage_4.png";
import carga from "../assets/check.png";

interface Service {
  name: string;
  type: "subscription" | "one-time";
  priceMXN: number;
  description: string;
  icon?: string;
  link: string;
}

const services: Service[] = [
  {
    name: "Usuarios Adicionales",
    type: "subscription",
    priceMXN: 100,
    description: "Añade 1 usuario extra con rol de Administrador, Usuario o Lector.",
    icon: users,
    link: import.meta.env.VITE_MERCADOPAGO_URL_USER_EXTRA,
  },
  {
    name: "Recordatorios Automáticos de adeudos",
    type: "subscription",
    priceMXN: 200,
    description: "Envía recordatorios automáticos vía Email y WhatsApp a tutores y alumnos.",
    icon: adeudo,
    link: import.meta.env.VITE_MERCADOPAGO_URL_REMINDERS,
  },
  {
    name: "Chatbot WhatsApp",
    type: "subscription",
    priceMXN: 600,
    description: "Responde automáticamente preguntas frecuentes en WhatsApp.",
    icon: bot,
    link: import.meta.env.VITE_MERCADOPAGO_URL_CHATBOT,
  },
  {
    name: "Expansión de Alumnos",
    type: "subscription",
    priceMXN: 200,
    description: "Agrega bloques de 100 alumnos adicionales.",
    icon: alumno,
    link: import.meta.env.VITE_MERCADOPAGO_URL_EXPANSION,
  },
  {
    name: "Pasarela de Pago",
    type: "subscription",
    priceMXN: 400,
    description: "Permite recibir pagos directamente desde el sitio web con integración segura.",
    icon: pago,
    link: import.meta.env.VITE_MERCADOPAGO_URL_PAYMENT,
  },
  {
    name: "Activación de Correos Institucionales",
    type: "subscription",
    priceMXN: 400,
    description: "Crea automaticamente correos en Google Workspace para los alumnos al registrarlos.",
    icon: correo,
    link: import.meta.env.VITE_MERCADOPAGO_URL_EMAIL,
  },
  {
    name: "Ticket de Soporte por Videollamada",
    type: "one-time",
    priceMXN: 200,
    description: "Sesión de 30 min en vivo con un experto para resolver dudas.",
    icon: soporte,
    link: import.meta.env.VITE_MERCADOPAGO_URL_SUPPORT_TICKET,
  },
  {
    name: "Carga Masiva y Actualización de Datos",
    type: "one-time",
    priceMXN: 1000,
    description: "Carga de hasta 100 registros desde Excel o Google Sheets.",
    icon: carga,
    link: import.meta.env.VITE_MERCADOPAGO_URL_DATA_UPLOAD,
  },
];

const ServicesPage: FC = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  const grouped = {
    subscription: services.filter((s) => s.type === "subscription"),
    oneTime: services.filter((s) => s.type === "one-time"),
  };

  const handleSelect = (service: Service) => {
    setSelected(service);
  };

  const closeModal = () => setSelected(null);

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold text-scolBlue text-center mb-10">
        Servicios Adicionales
      </h2>

      {["subscription", "oneTime"].map((type) => (
        <div key={type} className="mb-16">
          <h3 className="text-2xl font-semibold text-scolBlue mb-6">
            {type === "subscription" ? "Suscripciones mensuales" : "Pagos únicos"}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grouped[type as keyof typeof grouped].map((s, i) => (
              <div
                key={i}
                className="relative group perspective"
                onClick={() => handleSelect(s)}
              >
                <div className="relative w-full h-52 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer">
                  {/* Front */}
                    <div className="absolute w-full h-full backface-hidden bg-white border rounded-xl shadow-md p-4 flex flex-col justify-center items-center">
                    <img src={s.icon} alt="icono" className="w-10 h-10 mb-3" />
                    <h4 className="text-lg font-bold text-scolBlue text-center mb-2">
                        {s.name}
                    </h4>
                    <p className="text-gray-600 text-center text-sm">MXN ${s.priceMXN}</p>
                    </div>


                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-scolBlue text-white rounded-xl p-4 flex items-center justify-center text-sm text-center">
                    {s.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg text-center space-y-4">
            <h4 className="text-xl font-bold text-scolBlue">
              ¿Confirmar compra?
            </h4>
            <p className="text-gray-700">
              Deseas adquirir <strong>{selected.name}</strong> por{" "}
              <strong>MXN ${selected.priceMXN}</strong>?
            </p>
            <div className="flex justify-center gap-4 mt-6">
            <button
            onClick={() => {
                window.open(selected.link, "_blank");
                closeModal();
            }}
            className="bg-scolBlue text-white px-4 py-2 rounded-md hover:bg-scolDark"
            >
            Confirmar
            </button>
              <button
                onClick={closeModal}
                className="border border-scolBlue text-scolBlue px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesPage;
