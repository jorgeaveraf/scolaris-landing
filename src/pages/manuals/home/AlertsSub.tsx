// src/pages/manuals/home/AlertsSub.tsx

import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../../hooks/useSectionInView";
import { useVideoModalStore } from "../../../store/useVideoModalStore";
import alert from "../../../assets/menuIcon_7.png";

const AlertsSub: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refNavegacion, inView: inViewNavegacion } = useSectionInView<HTMLDivElement>();
  const { ref: refTipos, inView: inViewTipos } = useSectionInView<HTMLDivElement>();
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
        <div className="flex items-center gap-4">
        <img src={alert} alt="analytics icon" className="w-12 h-12" />
        <h2 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Visualización de Alertas</h2>
        </div>

        <h3 className="text-xl font-semibold">Mantente al Tanto de lo Importante</h3>
        <p className="text-gray-700">
          El módulo de Alertas te ayuda a monitorear información clave sobre alumnos, documentos y pagos pendientes.
          Así podrás detectar a tiempo qué necesita atención y tomar acción rápidamente.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Personaliza tu vista con filtros y tamaños.</li>
          <li>Haz clic en <strong>Reestablecer</strong> para volver a la vista original.</li>
        </ul>
      </motion.div>

      {/* NAVEGACIÓN */}
      <motion.div
        ref={refNavegacion}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewNavegacion ? 1 : 0.4,
          y: inViewNavegacion ? 0 : 20,
          filter: inViewNavegacion ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Cómo Navegar en las Alertas</h3>
        <p className="text-gray-700">
          Haz clic en cualquier alerta para ver más detalles sobre cada registro. La cantidad de alertas que ves depende de tu plan.
          Revisa <em>Scolaris - Paquetes</em> para más detalles.
        </p>
      </motion.div>

      {/* TIPOS DE ALERTAS */}
      <motion.div
        ref={refTipos}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewTipos ? 1 : 0.4,
          y: inViewTipos ? 0 : 20,
          filter: inViewTipos ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Tipos de Alertas y Cómo Usarlas</h3>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li><strong>Alumnos pendientes de inscripción:</strong> muestra alumnos activos que aún no están inscritos. Incluye acción rápida.</li>
          <li><strong>Documentación faltante:</strong> alumnos con documentos pendientes. Puedes adjuntar desde aquí.</li>
          <li><strong>Deudores:</strong> pagos vencidos en periodos activos. Puedes registrar pagos desde esta sección.</li>
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
          <li><strong>¿Por qué algunos alumnos no aparecen en la alerta de inscripción?</strong> Solo se muestran alumnos activos sin inscripción registrada.</li>
          <li><strong>¿Qué pasa si inscribo desde la alerta?</strong> El alumno desaparecerá automáticamente de la lista.</li>
          <li><strong>¿Por qué no aparecen ciertos alumnos en la alerta de deudores?</strong> Solo se muestran pagos vencidos (referencias activas).</li>
        </ul>
        <p className="text-gray-700 font-medium">
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

export default AlertsSub;
