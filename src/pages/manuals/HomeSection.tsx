import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useVideoModalStore } from "../../store/useVideoModalStore";
import home from "../../assets/menuIcon_2.png";

const HomeSection: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refAccesos, inView: inViewAccesos } = useSectionInView<HTMLDivElement>();
  const { ref: refAcciones, inView: inViewAcciones } = useSectionInView<HTMLDivElement>();
  const { ref: refFaq, inView: inViewFaq } = useSectionInView<HTMLDivElement>();
  const { ref: refSoporte, inView: inViewSoporte } = useSectionInView<HTMLDivElement>();
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
        className="space-y-4"
      >
        <div className="flex items-center gap-4">
          <img src={home} alt="Home icon" className="w-12 h-12" />
          <h1 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Home</h1>
        </div>


        <h2 className="text-2xl font-semibold">Tu Centro de Control en ScolarisQ</h2>
        <p className="text-lg text-gray-700">
          La sección <strong>Home</strong> es el punto de partida en ScolarisQ. Desde aquí, puedes acceder rápidamente a las herramientas más importantes y realizar acciones esenciales en solo unos clics.
        </p>
      </motion.div>


      {/* ACCESOS DIRECTOS */}
      <motion.div
        ref={refAccesos}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewAccesos ? 1 : 0.4,
          y: inViewAccesos ? 0 : 20,
          filter: inViewAccesos ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-2"
      >
        <h3 className="text-xl font-bold text-scolBlue">Accesos Directos: Todo a la Mano</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Analíticas:</strong> Consulta gráficos y métricas sobre alumnos activos, periodos vigentes y datos clave para tomar decisiones informadas.</li>
          <li><strong>Reportes:</strong> Accede a listados detallados de inscripciones, pagos y el estatus de los alumnos.</li>
          <li><strong>Alertas:</strong> Revisa notificaciones importantes sobre alumnos pendientes de inscripción, documentación faltante y pagos atrasados.</li>
        </ul>
      </motion.div>

      {/* ACCIONES RÁPIDAS */}
      <motion.div
        ref={refAcciones}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewAcciones ? 1 : 0.4,
          y: inViewAcciones ? 0 : 20,
          filter: inViewAcciones ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-2"
      >
        <h3 className="text-xl font-bold text-scolBlue">Acciones Rápidas: Ahorra Tiempo</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Agregar Alumno:</strong> Inicia el proceso de registro de un nuevo estudiante en el sistema.</li>
          <li><strong>Agregar Inscripción:</strong> Inscribe rápidamente a un alumno ya registrado en un nuevo periodo.</li>
          <li><strong>Soporte:</strong> Ticket por email o videollamada desde Home.</li>
        </ul>
        <p className="text-sm italic text-gray-500">
          * Algunos accesos o funcionalidades pueden variar según el paquete contratado por tu escuela.
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
        <h2 className="text-2xl font-semibold text-scolBlue">Preguntas Frecuentes (FAQ)</h2>
        <ul className="text-gray-700 space-y-2">
          <li><strong>¿Qué información encuentro en la sección “Analíticas”?</strong><br />
            Aquí verás gráficos y datos clave sobre alumnos activos, periodos vigentes y métricas generales para ayudarte en la toma de decisiones.
          </li>
          <li><strong>¿Qué puedo consultar en “Reportes”?</strong><br />
            En esta sección puedes ver inscripciones realizadas, pagos pendientes, estatus de alumnos y otros datos operativos.
          </li>
        </ul>
      </motion.div>

      {/* SOPORTE */}
      <motion.div
        ref={refSoporte}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewSoporte ? 1 : 0.4,
          y: inViewSoporte ? 0 : 20,
          filter: inViewSoporte ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      >
        <button
          onClick={() => openVideo("1OmhgVqeTIysOpz5d7JOcjDIlGGwfO72q")}
          className="text-scolBlue underline font-semibold hover:text-scolDark transition"
        >
          📹 ¿Necesitas Ayuda? Revisa nuestros videotutoriales
        </button>
      </motion.div>
    </section>
  );
};

export default HomeSection;
