import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useVideoModalStore } from "../../store/useVideoModalStore";
import alumnos from "../../assets/menuIcon_3.png";

const AlumnosSection: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refFunciones, inView: inViewFunciones } = useSectionInView<HTMLDivElement>();
  const { ref: refValidaciones, inView: inViewValidaciones } = useSectionInView<HTMLDivElement>();
  const { ref: refAcciones, inView: inViewAcciones } = useSectionInView<HTMLDivElement>();
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
        <img src={alumnos} alt="analytics icon" className="w-12 h-12" />
        <h2 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Gestión de Alumnos</h2>
        </div>

        <h3 className="text-xl font-semibold">Agrega, Edita o Elimina</h3>
        <p className="text-gray-700">
          El módulo de <strong>Alumnos</strong> te permite registrar, consultar y actualizar la información de cada estudiante en tu institución. Desde aquí puedes visualizar datos clave, agregar nuevos alumnos y gestionarlos.
        </p>
        <p className="text-gray-700 font-medium">
          <em>¿Lo más importante?</em> Solo los <strong>alumnos activos</strong> pueden ser inscritos en periodos y recibir pagos, así que mantén esta sección actualizada.
        </p>
      </motion.div>

      {/* FUNCIONALIDADES */}
      <motion.div
        ref={refFunciones}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewFunciones ? 1 : 0.4,
          y: inViewFunciones ? 0 : 20,
          filter: inViewFunciones ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Funcionalidades Principales</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Listado de Alumnos:</strong> Consulta rápida con info básica como nombre, grado e inscripciones activas.</li>
          <li><strong>Filtros Avanzados:</strong> Busca usando criterios como nombre, CURP, grupo, etc.</li>
          <li><strong>Detalle del Alumno:</strong> Ver datos personales, documentos e info adicional.</li>
          <li><strong>Registrar Nuevo Alumno:</strong> Con formularios validados según el paquete contratado.</li>
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
        <h3 className="text-xl font-semibold text-scolBlue">Validaciones según Paquete</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Básico:</strong> Validaciones esenciales como formato de correo, número y longitud de campos.</li>
          <li><strong>Estándar:</strong> Prevención de registros duplicados automáticamente.</li>
          <li><strong>Premium:</strong> CURP y nombres formateados automáticamente.</li>
        </ul>
      </motion.div>

      {/* ACCIONES */}
      <motion.div
        ref={refAcciones}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewAcciones ? 1 : 0.4,
          y: inViewAcciones ? 0 : 20,
          filter: inViewAcciones ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Acciones rápidas</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Ver tutor:</strong> Consulta el tutor a cargo del alumno.</li>
          <li><strong>Inscribir alumno:</strong> Abre formulario para inscribir en un periodo activo.</li>
          <li><strong>Añadir Alumno:</strong> Accede al formulario de nuevo alumno.</li>
          <li><strong>Editar Alumno:</strong> Modifica los datos existentes.</li>
          <li><strong>Eliminar Alumno:</strong> Solo para usuarios administradores.</li>
        </ul>
        <p className="text-sm text-gray-500 italic">
          * Algunas funcionalidades podrían variar según el rol de acceso que se tenga.
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
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>¿Cómo registro un nuevo alumno?</strong> Haz clic en "Añadir" y llena el formulario. Asegúrate de cumplir con las validaciones antes de guardar.</li>
          <li><strong>¿Por qué el sistema no me deja avanzar?</strong> Verifica campos obligatorios y formato correcto.</li>
          <li><strong>¿Puedo modificar datos de un alumno ya registrado?</strong> Sí, desde el perfil del alumno.</li>
          <li><strong>¿Qué hago si cometí un error?</strong> Puedes editar o contactar soporte.</li>
          <li><strong>¿Cómo busco un alumno específico?</strong> Usa la barra de búsqueda o filtros avanzados.</li>
          <li><strong>¿Quién puede eliminar a un alumno?</strong> Solo administradores.</li>
          <li><strong>¿Qué sucede si elimino un alumno?</strong> Se eliminan todas sus inscripciones y pagos. Esta acción no se puede deshacer.</li>
          <li><strong>¿Por qué no puedo agregar un alumno nuevo?</strong> Tal vez alcanzaste el límite de tu plan. Considera ampliarlo.</li>
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

export default AlumnosSection;
