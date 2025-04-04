// src/pages/manuals/InscripcionesSection.tsx

import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useVideoModalStore } from "../../store/useVideoModalStore";
import enrollIcon from "../../assets/enroll.png";

const InscripcionesSection: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refFuncion, inView: inViewFuncion } = useSectionInView<HTMLDivElement>();
  const { ref: refValidaciones, inView: inViewValidaciones } = useSectionInView<HTMLDivElement>();
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
        <img src={enrollIcon} alt="analytics icon" className="w-12 h-12" />
        <h2 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Gestión de Inscripciones</h2>
        </div>

        <h3 className="text-xl font-semibold">Alumnos inscritos a periodos</h3>
        <p className="text-gray-700">
          El módulo de <strong>Inscripciones</strong> te permite ver y administrar las inscripciones de los alumnos en cada <strong>periodo</strong> dentro de Scolaris.
          <br />
          <br />
          <strong>Importante:</strong> Este módulo <strong>solo permite consultar, editar o eliminar inscripciones existentes</strong>. Si necesitas agregar una nueva inscripción, debes hacerlo desde <em>Home</em> o el módulo de <em>Alumnos</em>.
        </p>
      </motion.div>

      {/* FUNCIONAMIENTO */}
      <motion.div
        ref={refFuncion}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewFuncion ? 1 : 0.4,
          y: inViewFuncion ? 0 : 20,
          filter: inViewFuncion ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">¿Cómo funciona?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Organización Clara:</strong> Las inscripciones están agrupadas por <em>periodo y grupo (grado/sección)</em>. Para una mejor visualización, te recomendamos <em>filtrar primero por periodo</em>.
          </li>
          <li>
            <strong>Prevención de Registros Duplicados:</strong> Disponible a partir del <em>paquete Estándar</em>. El sistema detecta si un alumno ya está inscrito en un <strong>periodo y grupo específico</strong> para evitar inscripciones repetidas.
          </li>
          <li>
            <strong>Acciones disponibles:</strong>
            <ul className="list-[circle] list-inside ml-6 space-y-1">
              <li><strong>Ver Alumno:</strong> Accede rápidamente a los detalles del alumno asociado.</li>
              <li><strong>Ver Solicitud de inscripción:</strong> Consulta la solicitud generada automáticamente al momento de la inscripción.</li>
              <li><strong>Enviar Solicitud de inscripción:</strong> Envía la solicitud con los datos actualizados al tutor del alumno.</li>
            </ul>
          </li>
          <li>
            <strong>Detalle de la inscripción:</strong> Aquí encontrarás información relevante sobre el alumno, datos de la inscripción, datos académicos, estatus de la inscripción, entre otros.
          </li>
        </ul>
      </motion.div>

      {/* VALIDACIONES */}
      <motion.div
        ref={refValidaciones}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewValidaciones ? 1 : 0.4,
          y: inViewValidaciones ? 0 : 20,
          filter: inViewValidaciones ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Restricciones y validaciones</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Campos obligatorios:</strong> Marcados con un asterisco (*), deben completarse con información válida.</li>
          <li><strong>Solo para administrador:</strong>
            <ul className="list-[circle] ml-6 space-y-1">
              <li><strong>Beca:</strong> La asignación de becas está disponible solo para administradores.</li>
              <li><strong>Eliminación:</strong> Solo administradores pueden eliminar inscripciones.</li>
            </ul>
          </li>
          <li><strong>Descuentos:</strong> Disponible a partir del <em>paquete Estándar</em>, se introducen en porcentaje.</li>
          <li><strong>Recordatorios:</strong>
            <ul className="ml-6 list-[circle] space-y-1">
              <li><strong>Recordatorio de pago:</strong> Disponible solo en <em>paquete Premium</em>, activable por inscripción.</li>
              <li><strong>Recordatorio de adeudo:</strong> Disponible como <em>servicio adicional</em>, activable o desactivable por inscripción.</li>
            </ul>
          </li>
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
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li><strong>¿Por qué no puedo agregar una inscripción desde este módulo?</strong> Este módulo solo permite administrar inscripciones existentes. Para agregar una nueva, usa las opciones de <em>Home</em> o <em>Alumnos</em>.</li>
          <li><strong>¿Qué significa el estado mostrado en cada inscripción?</strong> Activo, Promovido, Graduado, Baja. Indican la situación actual del alumno respecto a la inscripción.</li>
          <li><strong>¿Cómo puedo encontrar rápidamente una inscripción específica?</strong> Utiliza la barra de búsqueda o selecciona un periodo específico en la barra lateral (o superior en móvil) para filtrar resultados.</li>
          <li><strong>¿Quién puede eliminar una inscripción?</strong> Solo usuarios con rol de administrador tienen la opción de eliminar inscripciones, para asegurar la integridad de los datos.</li>
          <li><strong>¿Qué sucede al eliminar una inscripción?</strong> Cuidado: también se eliminan todos los pagos y registros relacionados. Esta acción <strong>no se puede deshacer</strong>.</li>
        </ul>

        <button
          onClick={() => openVideo("c0BJRR_TIEI")}
          className="text-scolBlue underline font-semibold hover:text-scolDark transition mt-4"
        >
          📹 ¿Necesitas Ayuda? Revisa nuestros videotutoriales
        </button>
      </motion.div>
    </section>
  );
};

export default InscripcionesSection;
