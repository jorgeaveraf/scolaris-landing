import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import notFound from "../assets/404.png"; // Asegúrate de tener una ilustración simpática (opcional)

const NotFoundPage: FC = () => {
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
        className="max-w-xl bg-white shadow-md rounded-2xl p-10 text-center border border-scolGray"
      >
        <img
          src={notFound}
          alt="Página no encontrada"
          className="w-40 h-40 mx-auto mb-6"
        />
        <h1 className="text-4xl font-extrabold text-scolBlue mb-4">
          ¡Uy! Página no encontrada
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Parece que esta ruta no existe o ha sido movida. No te preocupes, te llevamos de regreso.
        </p>

        <Link
          to="/"
          className="inline-block bg-scolBlue text-white font-bold px-6 py-3 rounded-md hover:bg-scolDark transition"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
