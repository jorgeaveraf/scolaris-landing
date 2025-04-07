import { FC } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import { motion } from "framer-motion";
import hero from "../assets/bienvenidaPage_1.png";
import bienvenida from "../assets/bienvenidaPage_2.png";
import pin from "../assets/bienvenidaPage_3.png";
import personalizacion from "../assets/bienvenidaPage_4.png";

const BienvenidaPage: FC = () => {
    const { ref: refHero, inView: inViewHero } = useSectionInView<HTMLDivElement>();
    const { ref: refBienvenida, inView: inViewBienvenida } = useSectionInView<HTMLDivElement>();
    const { ref: refManuales, inView: inViewManuales } = useSectionInView<HTMLDivElement>();
    const { ref: refPersonaliza, inView: inViewPersonaliza } = useSectionInView<HTMLDivElement>();
    const { ref: refQueSigue, inView: inViewQueSigue } = useSectionInView<HTMLDivElement>();
    const { ref: refSoporte, inView: inViewSoporte } = useSectionInView<HTMLDivElement>();

  return (
    <section className="pt-24 pb-16 px-4 max-w-5xl mx-auto text-gray-800 space-y-24">
      {/* Slide 1: Hero */}
      <motion.div
        ref={refHero}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewHero ? 1 : 0.4,
          y: inViewHero ? 0 : 20,
          filter: inViewHero ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-scolBlue leading-tight mb-6">
            Descubre a <br className="hidden sm:block" /> Scolaris
          </h1>
          <p className="text-2xl md:text-3xl text-scolDark font-medium max-w-xl">
            Gestión escolar inteligente desde el primer día.
          </p>
        </div>
        <img src={hero} alt="Hero" className="w-full max-w-md md:max-w-lg mx-auto" />
      </motion.div>

      {/* Slide 2: Bienvenida */}
      <motion.div
        ref={refBienvenida}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewBienvenida ? 1 : 0.4,
          y: inViewBienvenida ? 0 : 20,
          filter: inViewBienvenida ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="relative bg-white py-12 px-6 md:px-10 rounded-xl shadow-sm"
        >
        <img
            src={bienvenida}
            alt="Decorativo de bienvenida"
            className="absolute right-8 top-2 w-44 md:w-56 lg:w-64 opacity-90"
        />

        <div className="max-w-3xl mx-auto text-left space-y-6">
            <h2 className="text-4xl font-extrabold text-scolBlue">
            ¡Bienvenido a Scolaris!
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Nos alegra tenerte con nosotros. Has iniciado el camino hacia una gestión educativa más eficiente, moderna y automatizada.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            A continuación encontrarás los primeros pasos para el uso de tu suscripción dentro de Scolaris, de acuerdo con tus preferencias.
            </p>
            <div className="relative bg-blue-50 p-5 md:p-6 rounded-2xl shadow-md border-l-4 border-blue-500 mt-8 max-w-2xl">
            <img
                src={pin}
                alt="Pin decorativo"
                className="absolute -top-4 left-6 w-10 h-10 z-10"
            />
            <div className="pl-12">
                <p className="text-lg font-bold text-scolBlue mb-1">Nuestro objetivo:</p>
                <p className="text-base text-gray-700 leading-relaxed">
                Guiarte de manera clara, rápida y efectiva.
                </p>
            </div>
            </div>
        </div>
        </motion.div>

      {/* Slide 3: Manuales */}
        <motion.div
        ref={refManuales}
        initial={{ opacity: 0, y: 40 }}
        animate={{
            opacity: inViewManuales ? 1 : 0.4,
            y: inViewManuales ? 0 : 20,
            filter: inViewManuales ? "blur(0px)" : "blur(4px)",
            transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-6"
        >
        <h2 className="text-3xl font-bold text-scolBlue">
            ¿Cómo usar Scolaris?
        </h2>

        <p className="text-lg text-gray-700">
            Hemos preparado guías prácticas para ti y tu equipo, organizadas por módulos y funciones clave.
        </p>

        <a
            href="/manuales"
            className="text-scolDark font-semibold text-lg underline inline-flex items-center gap-2"
        >
            🔗 Ver Manuales de Usuario
        </a>

        <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 shadow-sm">
            <p className="text-gray-700 text-base leading-relaxed">
            ➕ <strong>Incluye módulos como:</strong> Alumnos, Inscripciones, Pagos, Reportes, Periodos, Analíticas y más.
            </p>
        </div>
        </motion.div>


      {/* Slide 4: Personalización */}
        <motion.div
        ref={refPersonaliza}
        initial={{ opacity: 0, y: 40 }}
        animate={{
            opacity: inViewPersonaliza ? 1 : 0.4,
            y: inViewPersonaliza ? 0 : 20,
            filter: inViewPersonaliza ? "blur(0px)" : "blur(4px)",
            transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
        <div className="flex-1">
            <h2 className="text-3xl font-bold text-scolBlue mb-4">
            Personaliza tu sistema
            </h2>
            <p className="text-lg mb-4 text-gray-700">
            Queremos configurar Scolaris según tus preferencias institucionales. Por eso te solicitaremos información como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            <li>Datos fiscales (si necesitas factura)</li>
            <li>Grados y grupos que manejas</li>
            <li>Logo y color institucional</li>
            <li>Correos de acceso y roles</li>
            <li>Campos personalizados que deseas ver en tu app</li>
            </ul>
        </div>
        <img
            src={personalizacion}
            alt="Formulario"
            className="max-w-sm w-full md:max-w-md mx-auto"
        />
        </motion.div>

      {/* Slide 5: ¿Qué sigue? */}
        <motion.div
        ref={refQueSigue}
        initial={{ opacity: 0, y: 40 }}
        animate={{
            opacity: inViewQueSigue ? 1 : 0.4,
            y: inViewQueSigue ? 0 : 20,
            filter: inViewQueSigue ? "blur(0px)" : "blur(4px)",
            transition: { duration: 0.6, ease: "easeOut" },
        }}
        >
        <h2 className="text-3xl font-bold text-scolBlue mb-4">
            ¿Qué sigue después de darnos tu información?
        </h2>
        <p className="text-lg mb-6 text-gray-700">
            Una vez que envíes tu configuración, nuestro equipo:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            <li>Activará tu sistema personalizado</li>
            <li>Cargará tu logo, color y accesos autorizados (si aplica)</li>
            <li>Configurará automatizaciones</li>
            <li>Ajustará tus accesos y flujos</li>
            <li>Te entregará la app con acceso completo</li>
            <li>Programará la capacitación</li>
        </ul>
        <div className="bg-blue-50 p-4 mt-6 rounded-xl border-l-4 border-blue-500 shadow-sm text-base text-gray-700">
            📅 En breve estarás operando con tu sistema activo y listo para usar.
        </div>
        </motion.div>


      {/* Slide 6: Soporte */}
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
        <h2 className="text-3xl font-bold text-scolBlue mb-4">
            Comunicación equipo Scolaris
        </h2>
        <p className="text-lg mb-4 text-gray-700">
            Recuerda que dispones de estos canales para solicitar ayuda en todo momento:
        </p>
        <ul className="space-y-2 text-gray-700 text-base">
            <li>📱 WhatsApp (bot)</li>
            <li>📧 soporte@scolaris.mx</li>
            <li>📹 Videollamada (si tu plan la incluye)</li>
        </ul>
        <div className="bg-scolBlue text-white p-4 mt-6 rounded-xl shadow-sm font-semibold text-center">
            ❤️ Tu experiencia es nuestra prioridad. Cualquier duda, aquí estaremos.
        </div>
        </motion.div>

    </section>
  );
};

export default BienvenidaPage;
