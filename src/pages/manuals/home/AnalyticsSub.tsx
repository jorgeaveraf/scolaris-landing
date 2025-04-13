// src/pages/manuals/subpages/AnalyticsSub.tsx

import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../../hooks/useSectionInView";
import { useVideoModalStore } from "../../../store/useVideoModalStore";
import analytics from "../../../assets/featurePage_2.png";

const AnalyticsSub: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refDashboard, inView: inViewDashboard } = useSectionInView<HTMLDivElement>();
  const { ref: refInteraccion, inView: inViewInteraccion } = useSectionInView<HTMLDivElement>();
  const { ref: refActualizacion, inView: inViewActualizacion } = useSectionInView<HTMLDivElement>();
  const { ref: refAcceso, inView: inViewAcceso } = useSectionInView<HTMLDivElement>();
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
        <img src={analytics} alt="analytics icon" className="w-12 h-12" />
        <h2 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Visualización de Analíticas</h2>
        </div>
        <h3 className="text-xl font-semibold">Datos que te ayudan a tomar decisiones</h3>
        <p className="text-gray-700">
          El módulo Analíticas te permite ver información clave sobre tu institución de forma visual y sencilla. Aquí puedes consultar métricas importantes como:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Cantidad de alumnos activos</li>
          <li>Estado de inscripciones</li>
          <li>Ingresos proyectados</li>
          <li>Retención de alumnos</li>
          <li>¡Y mucho más!</li>
        </ul>
      </motion.div>

      {/* PERSONALIZACIÓN DEL DASHBOARD */}
      <motion.div
        ref={refDashboard}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewDashboard ? 1 : 0.4,
          y: inViewDashboard ? 0 : 20,
          filter: inViewDashboard ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Personaliza tu Dashboard a tu manera</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Filtra la información:</strong> Ajusta las gráficas con los filtros disponibles para enfocarte en lo que más te interesa.</li>
          <li><strong>Organiza los widgets:</strong> Modifica el tamaño de cada gráfica para que la visualización sea más clara y cómoda.</li>
          <li><strong>¿Quieres volver a la vista original?</strong> Haz clic en <strong>Restablecer</strong> para restaurar la configuración inicial.</li>
        </ul>
      </motion.div>

      {/* INTERACCIÓN */}
      <motion.div
        ref={refInteraccion}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewInteraccion ? 1 : 0.4,
          y: inViewInteraccion ? 0 : 20,
          filter: inViewInteraccion ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Interacción con los Datos</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Pasa el mouse sobre una gráfica:</strong> Verás etiquetas con info detallada.</li>
          <li><strong>Haz clic en una gráfica:</strong> Podrás profundizar en los datos.</li>
        </ul>
      </motion.div>

      {/* ACTUALIZACIÓN */}
      <motion.div
        ref={refActualizacion}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewActualizacion ? 1 : 0.4,
          y: inViewActualizacion ? 0 : 20,
          filter: inViewActualizacion ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Datos Siempre Actualizados</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Scolaris se encarga de todo:</strong> La info se actualiza automáticamente.</li>
          <li><strong>Más datos, mejores análisis:</strong> Cuantos más registros tengas, más precisos serán los reportes.</li>
        </ul>
      </motion.div>

      {/* ACCESO SEGÚN PLAN */}
      <motion.div
        ref={refAcceso}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewAcceso ? 1 : 0.4,
          y: inViewAcceso ? 0 : 20,
          filter: inViewAcceso ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Acceso según tu Plan</h3>
        <p className="text-gray-700">
          Algunas analíticas están disponibles <strong>según el paquete contratado</strong>.
        </p>
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
          <li><strong>¿Por qué no veo todas las analíticas?</strong> Depende del plan contratado.</li>
          <li><strong>¿Puedo personalizar las gráficas?</strong> Sí, con filtros y tamaños. Usa <em>Restablecer</em> para la vista inicial.</li>
          <li><strong>¿Cada cuánto se actualizan los datos?</strong> Automáticamente, en tiempo real.</li>
        </ul>
            <p className="text-gray-700 font-medium">
            <br />
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

export default AnalyticsSub;
