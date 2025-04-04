// src/pages/manuals/IntroSection.tsx

import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";

const IntroSection: FC = () => {
  const { ref: refIntro1, inView: inViewIntro1 } = useSectionInView<HTMLDivElement>();
  const { ref: refIntro2, inView: inViewIntro2 } = useSectionInView<HTMLDivElement>();
  const { ref: refConcepts, inView: inViewConcepts } = useSectionInView<HTMLDivElement>();
  const { ref: refAcceso, inView: inViewAcceso } = useSectionInView<HTMLDivElement>();
  const { ref: refFaq, inView: inViewFaq } = useSectionInView<HTMLDivElement>();
  const { ref: refBuenasPracticas, inView: inViewBuenasPracticas } = useSectionInView<HTMLDivElement>();
  const { ref: refSoporte, inView: inViewSoporte } = useSectionInView<HTMLDivElement>();

  return (
    <section className="space-y-24">
      <motion.div
        id="intro"
        ref={refIntro1}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewIntro1 ? 1 : 0.4,
          y: inViewIntro1 ? 0 : 20,
          filter: inViewIntro1 ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-extrabold text-scolBlue">¡Bienvenido a Scolaris!</h1>
        <h2 className="text-2xl font-semibold">Gestiona tu escuela con un click!</h2>
        <p className="text-lg text-gray-700">
          Scolaris es una herramienta que te ayuda a organizar alumnos, inscripciones y pagos en tu escuela o academia. Es fácil de usar y te ayuda a ahorrar tiempo en tareas administrativas.
        </p>

      </motion.div>

      <motion.div
        ref={refIntro2}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewIntro2 ? 1 : 0.4,
          y: inViewIntro2 ? 0 : 20,
          filter: inViewIntro2 ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-6"
      >
        <h3 className="text-xl font-bold text-scolBlue">¿Qué puedes lograr con Scolaris?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Registrar alumnos e inscripciones en segundos.</li>
          <li>Controlar pagos, aplicar descuentos y manejar abonos.</li>
          <li>Automatizar recordatorios para que no olviden pagar.</li>
          <li>Generar reportes claros para tomar mejores decisiones.</li>
          <li>Personalizar el sistema según lo que necesites.</li>
        </ul>
        <h3 className="text-xl font-bold text-scolBlue">Cosas que debes saber antes de empezar</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Algunas funciones dependen del paquete contratado.</li>
          <li>Solo los usuarios autorizados pueden entrar.</li>
          <li>Si necesitas más funciones, puedes contratar servicios adicionales.</li>
        </ul>
      </motion.div>

      <motion.div
        ref={refConcepts}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewConcepts ? 1 : 0.4,
          y: inViewConcepts ? 0 : 20,
          filter: inViewConcepts ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-scolBlue">Conceptos Clave (¡Tranquilo, son fáciles!)</h2>
        <ul className="text-gray-700 space-y-1">
          <li><strong>Acciones Rápidas:</strong> Botones para tareas importantes como inscribir alumnos.</li>
          <li><strong>Alumno Activo:</strong> Estudiantes registrados que pueden inscribirse y pagar.</li>
          <li><strong>Alertas:</strong> Te notifica sobre pendientes o vencimientos.</li>
          <li><strong>CDA:</strong> Carpeta Digital del Alumno con su documentación.</li>
          <li><strong>Inscripción Activa:</strong> Alumnos inscritos en un periodo.</li>
          <li><strong>Paquetes y Servicios Adicionales:</strong> Acceso según lo contratado.</li>
          <li><strong>Referencia de Pago:</strong> Texto que identifica cada pago.</li>
          <li><strong>Total de Número de Pagos:</strong> Cantidad estimada a pagar por alumno en un ciclo.</li>
        </ul>
      </motion.div>

      <motion.div
        ref={refAcceso}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewAcceso ? 1 : 0.4,
          y: inViewAcceso ? 0 : 20,
          filter: inViewAcceso ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-scolBlue">¿Cómo acceder a Scolaris? (Fácil y rápido)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Desde la Web:</strong> Usa el enlace de tu administrador.</li>
          <li><strong>Desde la App:</strong> Descarga AppSheet y entra con tus credenciales.</li>
        </ul>
      </motion.div>

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
        <ul className="text-gray-700 space-y-1">
          <li><strong>¿Olvidé mi contraseña?</strong> Pide ayuda a tu institución. Scolaris no gestiona accesos.</li>
          <li><strong>¿Puedo usar Scolaris en varios dispositivos?</strong> Sí, usando tus credenciales.</li>
          <li><strong>¿Debo compartir cuenta?</strong> No. Cada usuario debe tener su propio acceso.</li>
          <li><strong>¿No veo datos actualizados?</strong> Sincroniza la app o espera unos minutos.</li>
        </ul>
      </motion.div>

      <motion.div
        ref={refBuenasPracticas}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewBuenasPracticas ? 1 : 0.4,
          y: inViewBuenasPracticas ? 0 : 20,
          filter: inViewBuenasPracticas ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-scolBlue">Buenas Prácticas y Recomendaciones</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Mantén los datos actualizados:</strong> Registra en tiempo real.</li>
          <li><strong>Revisa reportes:</strong> Identifica problemas a tiempo.</li>
        </ul>
      </motion.div>

      <motion.div
        ref={refSoporte}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewSoporte ? 1 : 0.4,
          y: inViewSoporte ? 0 : 20,
          filter: inViewSoporte ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-scolBlue">Recursos de Soporte</h2>
        <ul className="text-gray-700 space-y-1">
          <li><strong>Manuales y tutoriales:</strong> En esta misma sección.</li>
          <li><strong>Bot de soporte:</strong> Escríbenos por WhatsApp.</li>
          <li><strong>Contacto directo:</strong> Desde el panel "Home" abre un ticket.</li>
        </ul>
        <p className="text-xl font-semibold text-scolBlue">
          ¡Estamos aquí para ayudarte! Bienvenido a Scolaris, la solución completa para una gestión escolar sencilla y efectiva.
        </p>
      </motion.div>
    </section>
  );
};

export default IntroSection;
