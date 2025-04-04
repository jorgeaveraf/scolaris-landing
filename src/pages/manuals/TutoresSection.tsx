import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useVideoModalStore } from "../../store/useVideoModalStore";
import tutors from "../../assets/menuIcon_4.png";

const TutoresSection: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refFunciones, inView: inViewFunciones } = useSectionInView<HTMLDivElement>();
  const { ref: refValidaciones, inView: inViewValidaciones } = useSectionInView<HTMLDivElement>();
  const { ref: refFaq, inView: inViewFaq } = useSectionInView<HTMLDivElement>();
  const openVideo = useVideoModalStore((state) => state.openVideo);

  return (
    <section className="space-y-24">
      {/* Intro */}
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
        <img src={tutors} alt="analytics icon" className="w-12 h-12" />
        <h2 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Gestión de Tutores</h2>
        </div>

        <p className="text-gray-700">
          El módulo de <strong>Tutores</strong> te permite administrar la información de los padres o tutores responsables de los alumnos inscritos. <strong>Para registrar un alumno, primero debe existir un tutor en el sistema.</strong>
        </p>
        <p className="text-gray-700">
          Aquí puedes agregar, editar y consultar los datos de contacto, documentos y detalles importantes de cada tutor.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Los tutores aparecen en una lista organizada</strong> con la cantidad de alumnos a su cargo.</li>
          <li><strong>Cada tutor tiene acciones rápidas</strong> para facilitar la comunicación y gestión.</li>
        </ul>
      </motion.div>

      {/* Funcionalidades */}
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
        <h3 className="text-xl font-semibold text-scolBlue">Acciones Rápidas: Contacta Fácilmente</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Llamar:</strong> Usa un móvil para llamar al teléfono principal o secundario con un clic.</li>
          <li><strong>WhatsApp:</strong> Disponible en escritorio para ambos teléfonos.</li>
          <li><strong>Correo:</strong> Funciona en móvil y escritorio para contacto inmediato.</li>
        </ul>
        <h3 className="text-xl font-semibold text-scolBlue">Funcionalidades Principales</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Añadir Tutor:</strong> Registra info personal y documentos.</li>
          <li><strong>Editar Tutor:</strong> Modifica datos cuando sea necesario.</li>
          <li><strong>Eliminar Tutor:</strong> Solo administradores pueden hacerlo.</li>
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Importante:</strong> Al eliminar un tutor, los alumnos a su cargo perderán la asociación y deberás reasignarlos.
        </p>
      </motion.div>

      {/* Validaciones */}
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
        <h3 className="text-xl font-semibold text-scolBlue">Restricciones y Validaciones</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Sólo administradores pueden eliminar tutores.</li>
          <li><strong>Prevención de duplicados:</strong> A partir del paquete Estándar, el sistema valida registros repetidos automáticamente.</li>
          <li><strong>Campos obligatorios:</strong> Aquellos con asterisco (*) deben completarse para continuar.</li>
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
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>¿Qué pasa si elimino un tutor?</strong> Se eliminará la asociación con los alumnos, pero no sus registros ni pagos.</li>
          <li><strong>¿Cómo previene el sistema duplicados?</strong> Desde el plan Estándar, el sistema detecta coincidencias y muestra una advertencia.</li>
        </ul>
        <p>
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

export default TutoresSection;
