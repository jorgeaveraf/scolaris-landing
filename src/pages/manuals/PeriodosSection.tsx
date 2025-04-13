import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useVideoModalStore } from "../../store/useVideoModalStore";
import periods from "../../assets/menuIcon_5.png";

const PeriodosSection: FC = () => {
  const { openVideo } = useVideoModalStore();

  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refRoles, inView: inViewRoles } = useSectionInView<HTMLDivElement>();
  const { ref: refFunc, inView: inViewFunc } = useSectionInView<HTMLDivElement>();
  const { ref: refValid, inView: inViewValid } = useSectionInView<HTMLDivElement>();
  const { ref: refFaq, inView: inViewFaq } = useSectionInView<HTMLDivElement>();

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
          transition: { duration: 0.6 },
        }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
        <img src={periods} alt="analytics icon" className="w-12 h-12" />
        <h2 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Gestión de Periodos</h2>
        </div>

        <h3 className="text-xl font-semibold">Configura y Administra</h3>
        <p className="text-gray-700">
          El módulo de Periodos es el primer paso para gestionar inscripciones en ScolarisQ. Aquí defines los ciclos académicos, estableces fechas y configuras la periodicidad de los pagos. Sin un periodo activo, no puedes registrar inscripciones ni pagos.
        </p>
      </motion.div>

      {/* ROLES */}
      <motion.div
        ref={refRoles}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewRoles ? 1 : 0.4,
          y: inViewRoles ? 0 : 20,
          filter: inViewRoles ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6 },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">¿Quién puede hacer qué?</h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li><strong>Usuarios regulares:</strong> Sólo pueden ver los periodos existentes.</li>
          <li><strong>Administradores:</strong> Pueden <strong>crear, modificar y eliminar</strong> periodos.</li>
        </ul>
      </motion.div>

      {/* FUNCIONALIDADES */}
      <motion.div
        ref={refFunc}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewFunc ? 1 : 0.4,
          y: inViewFunc ? 0 : 20,
          filter: inViewFunc ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6 },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Funcionalidades Principales</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Crear y Editar Periodos:</strong> Configura las fechas de inicio y fin, costo de inscripción, montos de pago (normal y pronto pago) y periodicidad de pagos (mensual, quincenal o bimestral).</li>
          <li><strong>Organización Automática:</strong> Los periodos aparecen en orden cronológico (de más reciente a más antiguo) y muestran cuántos alumnos están inscritos.</li>
          <li><strong>Acciones Disponibles:</strong> Editar Periodo, Eliminar Periodo (solo admins).</li>
          <li><strong>Consulta de Detalles:</strong> Incluye periodicidad de pago, montos establecidos, límite para pronto pago y total de pagos calculados automáticamente.</li>
        </ul>
      </motion.div>

      {/* VALIDACIONES */}
      <motion.div
        ref={refValid}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewValid ? 1 : 0.4,
          y: inViewValid ? 0 : 20,
          filter: inViewValid ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6 },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Validaciones y Restricciones</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Nombre del Periodo:</strong> Usa formatos como "2024-2025" o "Ene 2025-Dic 2025".</li>
          <li><strong>Orden del Periodo:</strong> Se ordenan del más reciente al más antiguo automáticamente.</li>
          <li><strong>Edición de Periodo:</strong> Solo se puede editar el nombre. Para cambiar otras configuraciones, debes eliminar y crear uno nuevo.</li>
          <li><strong>Fechas:</strong> La fecha de inicio debe ser anterior a la de fin.</li>
          <li><strong>Fecha de Finalización:</strong> Se usa para calcular el último pago programado.</li>
          <li><strong>Periodicidad y Total de Pagos:</strong> Se calcula automáticamente:
            <ul className="list-disc list-inside ml-5">
              <li><strong>Mensual / Bimestral:</strong> Los pagos inician desde el día 1.</li>
              <li><strong>Quincenal:</strong>
                <ul className="list-disc list-inside ml-5">
                  <li>Del día 1 al 15: primera quincena.</li>
                  <li>Del día 16 al 31: segunda quincena.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Límite de Pronto Pago:</strong> Solo entre el día 1 y el día 20 del mes.</li>
          <li><strong>Estatus Automático:</strong> El periodo se marca como "Inactivo" si ya pasó su fecha de fin.</li>
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
          transition: { duration: 0.6 },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Preguntas Frecuentes (FAQ)</h3>
        <ul className="text-gray-700 space-y-2">
          <li><strong>¿Qué sucede si elimino un periodo?</strong> Se eliminarán TODAS las inscripciones y pagos asociados. Esta acción no se puede deshacer.</li>
          <li><strong>¿Por qué no puedo establecer una fecha límite para pronto pago mayor al día 20 del mes?</strong> Para garantizar un flujo de pagos ordenado.</li>
          <li><strong>¿Qué pasa si ya no quiero usar un periodo académico?</strong> Puedes eliminarlo o dejar que el sistema lo marque como "Inactivo" automáticamente.</li>
        </ul>
        <button
          onClick={() => openVideo("c0BJRR_TIEI")}
          className="text-scolBlue underline font-semibold hover:text-scolDark transition"
        >
          📹 ¿Necesitas Ayuda? Revisa nuestros videotutoriales
        </button>
      </motion.div>
    </section>
  );
};

export default PeriodosSection;
