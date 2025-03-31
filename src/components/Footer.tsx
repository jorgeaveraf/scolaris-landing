// Footer.tsx
import { FC } from "react";

interface FooterProps {
  openModal: () => void;
}

const Footer: FC<FooterProps> = ({ openModal }) => {
  return (
    <section className="bg-scolBlue text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Empieza a usar Scolaris hoy
      </h2>
      <p className="text-lg mb-6">
        ¡La primera mensualidad es gratis! Sin tarjetas. Sin compromiso.
      </p>
      <button
        onClick={openModal}
        className="bg-white text-scolBlue font-semibold px-6 py-3 rounded-lg shadow hover:bg-scolGray hover:scale-105 hover:shadow-lg transition-transform duration-200"
      >
        Probar gratis 1 mes
      </button>

      <div className="mt-10 text-sm text-white/70">
        <p>&copy; {new Date().getFullYear()} Scolaris. Todos los derechos reservados.</p>
        <p className="mt-2">Privacidad · Términos · Contacto</p>
      </div>
    </section>
  );
};

export default Footer;
