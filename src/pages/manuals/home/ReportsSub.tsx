import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../../hooks/useSectionInView";
import { useVideoModalStore } from "../../../store/useVideoModalStore";

const ReportsSub: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refCustom, inView: inViewCustom } = useSectionInView<HTMLDivElement>();
  const { ref: refDownload, inView: inViewDownload } = useSectionInView<HTMLDivElement>();
  const { ref: refAccess, inView: inViewAccess } = useSectionInView<HTMLDivElement>();
  const { ref: refFaq, inView: inViewFaq } = useSectionInView<HTMLDivElement>();

  const openVideo = useVideoModalStore((state) => state.openVideo);

  return (
    <section className="space-y-24">
      {/* INTRO */}
      <motion.div
        ref={refIntro}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewIntro ? 1 : 0.4,
          y: inViewIntro ? 0 : 20,
          filter: inViewIntro ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-scolBlue">📄 Visualización de Reportes</h2>
        <h3 className="text-xl font-semibold">Toda la información que necesitas</h3>
        <p className="text-gray-700">
          El módulo de Reportes te permite acceder a información detallada sobre lo que sucede en tu institución. Puedes aplicar filtros de datos, ajustar la visualización y, dependiendo de tu plan, descargar la información para analizarla con más detalle.
        </p>
      </motion.div>

      {/* PERSONALIZACION */}
      <motion.div
        ref={refCustom}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewCustom ? 1 : 0.4,
          y: inViewCustom ? 0 : 20,
          filter: inViewCustom ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Personaliza tu Vista de Reportes</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Ajusta los filtros y tamaños:</strong> Organiza la información como mejor te convenga.</li>
          <li><strong>¿Algo salió desordenado?</strong> Haz clic en <strong>Restablecer</strong> para volver a la vista original.</li>
        </ul>
      </motion.div>

      {/* DESCARGA */}
      <motion.div
        ref={refDownload}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewDownload ? 1 : 0.4,
          y: inViewDownload ? 0 : 20,
          filter: inViewDownload ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Descarga de Reportes</h3>
        <p className="text-gray-700">
          Si tu plan es <strong>Estándar o Premium</strong>, puedes descargar los reportes en <strong>Excel</strong>.
        </p>
        <p className="text-sm text-gray-600">
          <strong>¡Ojo!</strong> Si aplicaste filtros dentro de la plataforma, la descarga reflejará exactamente esa información.
        </p>
      </motion.div>

      {/* ACCESO */}
      <motion.div
        ref={refAccess}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewAccess ? 1 : 0.4,
          y: inViewAccess ? 0 : 20,
          filter: inViewAccess ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Restricciones y Disponibilidad</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>La descarga de reportes no está disponible en el plan Básico.</strong></li>
          <li>Algunos reportes pueden estar limitados según el paquete contratado.</li>
        </ul>
      </motion.div>

      {/* FAQ */}
      <motion.div
        ref={refFaq}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewFaq ? 1 : 0.4,
          y: inViewFaq ? 0 : 20,
          filter: inViewFaq ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Preguntas Frecuentes (FAQ)</h3>
        <ul className="text-gray-700 space-y-2">
          <li><strong>¿Puedo cambiar la forma en la que veo los reportes?</strong> ¡Sí! Puedes ajustar los filtros y tamaños de los reportes según lo que necesites. Si quieres volver a la vista original, solo haz clic en <em>Restablecer</em>.</li>
          <li><strong>¿Puedo editar los detalles de un registro dentro de un reporte?</strong> No, solo accederás a una vista más detallada de la información.</li>
          <li><strong>¿Por qué no veo algunos reportes?</strong> La cantidad y tipo de reportes disponibles dependen del paquete que tienes contratado.</li>
        </ul>

        <p className="text-gray-700 font-medium pt-2">
          <button
            onClick={() => openVideo("c0BJRR_TIEI")}
            className="text-scolBlue underline font-semibold hover:text-scolDark transition"
          >
            📹 ¿Necesitas Ayuda? Revisa nuestros videotutoriales
          </button>
        </p>
      </motion.div>
    </section>
  );
};

export default ReportsSub;
