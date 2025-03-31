import { FC, useState } from "react";
import logoCC from "../assets/logo_CC.png";
import logoSIP from "../assets/logo_SIP.png";
import logoBIP from "../assets/logo_BIP.png";

interface TestimonialData {
  text: string;
  name: string;
  role: string;
  logo: string;
}

const testimonials: TestimonialData[] = [
  {
    text: "Desde que usamos Scolaris, el proceso de inscripción es mucho más fácil y organizado.",
    name: "Diana Laura V.",
    role: "Directora, Cendi Carrusel",
    logo: logoCC,
  },
  {
    text: "Scolaris nos da claridad en los reportes y seguimiento. Nos ha hecho más eficientes.",
    name: "Marely M.",
    role: "Directora, Secundaria Instituto Patria",
    logo: logoSIP,
  },
  {
    text: "El acceso desde cualquier dispositivo nos ha ayudado muchísimo con las familias.",
    name: "Mariel E.",
    role: "Directora, Bachillerato Instituto Patria",
    logo: logoBIP,
  },
];

const Testimonial: FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { text, name, role, logo } = testimonials[current];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl italic text-gray-800 mb-6">“{text}”</p>
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt={name}
            className="w-16 h-16 rounded-full object-contain mb-2"
          />
          <p className="font-semibold text-scolBlue">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

        {/* Controles del carrusel */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={prev}
            className="text-scolBlue hover:text-scolDark text-xl font-bold"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="text-scolBlue hover:text-scolDark text-xl font-bold"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
