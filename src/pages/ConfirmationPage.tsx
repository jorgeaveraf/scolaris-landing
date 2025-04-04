import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import check from "../assets/check.png";

const ConfirmationPage: FC = () => {
  const { ref, inView } = useSectionInView<HTMLDivElement>();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white to-blue-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inView ? 1 : 0.4,
          y: inView ? 0 : 20,
          filter: inView ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="max-w-lg bg-white shadow-lg rounded-2xl p-8 text-center border border-scolGray"
      >
        <img
          src={check}
          alt="Pago exitoso"
          className="w-20 h-20 mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-scolBlue mb-4">
          ¡Pago recibido con éxito!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Gracias por contratar Scolaris. Nos contactaremos con los próximos pasos y tu sistema se activará en breve.
        </p>
        <p className="text-gray-600 text-sm mb-6">
          Mientras tanto, consulta nuestra guía de bienvenida para comenzar a familiarizarte.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/bienvenida"
            className="bg-scolBlue text-white font-semibold px-6 py-3 rounded-md hover:bg-scolDark transition"
          >
            Ir a la guía de bienvenida
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ConfirmationPage;
