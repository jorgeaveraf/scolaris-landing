import { FC, useState, useEffect } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
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
    text: "El acceso desde cualquier dispositivo nos ha ayudado muchísimo con la atención a los padres de familia.",
    name: "Mariel E.",
    role: "Directora, Bachillerato Instituto Patria",
    logo: logoBIP,
  },
];

const Testimonial: FC = () => {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useSectionInView();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Cambia automáticamente cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval); // limpia intervalo al desmontar
  }, []);

  const { text, name, role, logo } = testimonials[current];

  return (
    <section
      ref={ref}
      id="testimonial"
      className={`bg-white py-20 px-6 transition-all duration-700 ${
        inView ? "opacity-100 blur-0 scale-100" : "opacity-40 blur-sm scale-[0.98]"
      }`}
    >
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
        <div className="mt-6 flex justify-center gap-10">
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
