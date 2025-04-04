import { FC } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useVideoModalStore } from "../../store/useVideoModalStore";
import pay from "../../assets/menuIcon_6.png";

const PagosSection: FC = () => {
  const { ref: refIntro, inView: inViewIntro } = useSectionInView<HTMLDivElement>();
  const { ref: refFuncionamiento, inView: inViewFuncionamiento } = useSectionInView<HTMLDivElement>();
  const { ref: refRestricciones, inView: inViewRestricciones } = useSectionInView<HTMLDivElement>();
  const { ref: refFaq, inView: inViewFaq } = useSectionInView<HTMLDivElement>();
  const openVideo = useVideoModalStore((state) => state.openVideo);

  return (
    <section className="space-y-24">
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
        <img src={pay} alt="analytics icon" className="w-12 h-12" />
        <h2 className="text-4xl font-extrabold text-scolBlue relative top-[2px]">Gestión de Pagos</h2>
        </div>
        <h3 className="text-xl font-semibold">Control Total de los Ingresos</h3>
        <p className="text-gray-700">
          El módulo de Pagos te permite registrar, consultar y administrar los pagos de los alumnos inscritos en cada periodo.
          Desde aquí puedes tener un control detallado del estado financiero de cada referencia del periodo, verificando rápidamente los pagos que han sido registrados.
        </p>
      </motion.div>

      <motion.div
        ref={refFuncionamiento}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewFuncionamiento ? 1 : 0.4,
          y: inViewFuncionamiento ? 0 : 20,
          filter: inViewFuncionamiento ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">¿Cómo funciona?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Pagos organizados por periodo y grupo:</strong> Para una mejor visualización, te recomendamos seleccionar primero el periodo que deseas consultar.</li>
          <li><strong>Acciones disponibles:</strong>
            <ul className="list-[circle] list-inside ml-4">
              <li><strong>Ver Detalles:</strong> Accede a los datos completos del pago, como referencia, monto, descuento aplicado y comprobante.</li>
              <li><strong>Editar:</strong> Modifica información del pago como el monto abonado, descuento y observaciones.</li>
              <li><strong>Eliminar:</strong> Disponible únicamente para administradores.</li>
            </ul>
          </li>
        </ul>
      </motion.div>

      <motion.div
        ref={refRestricciones}
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inViewRestricciones ? 1 : 0.4,
          y: inViewRestricciones ? 0 : 20,
          filter: inViewRestricciones ? "blur(0px)" : "blur(4px)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-scolBlue">Restricciones y validaciones:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Permisos de eliminación:</strong> Solo disponible para usuarios con rol de administrador.</li>
          <li><strong>Referencia de Pago:</strong> Se genera automáticamente según el periodo, fecha y número de pago.
            <ul className="list-[circle] list-inside ml-4">
              <li>No puedes avanzar a la siguiente referencia hasta que la anterior esté pagada en su totalidad.</li>
            </ul>
          </li>
          <li><strong>Validaciones del formulario:</strong> Los campos marcados con un asterisco (*) son obligatorios y deben contener información válida.</li>
          <li>La opción de <strong>pronto pago</strong> y <strong>día límite</strong> está disponible a partir del paquete Estándar y Premium respectivamente.</li>
          <li><strong>Cálculo Automático del Pago:</strong> El sistema calcula automáticamente el monto que debe ser cubierto, tomando en cuenta becas, tipo de pago y descuentos aplicados asignados al alumno.</li>
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
        <h3 className="text-xl font-semibold text-scolBlue">Preguntas Frecuentes (FAQ)</h3>
        <ul className="text-gray-700 space-y-2">
          <li><strong>¿Quién puede eliminar un pago?</strong> Solo los administradores pueden hacerlo. Si eliminas un pago, cualquier registro o comprobante relacionado también se eliminará.</li>
          <li><strong>¿Cómo se determina el monto que debe abonar un alumno?</strong> El monto es calculado automáticamente por el sistema considerando el tipo de pago seleccionado, beca asignada y cualquier descuento aplicado.</li>
          <li><strong>¿Puedo cambiar el monto a abonar?</strong> Claro, el monto abonado debe ser fiel a lo que haya sido pagado realmente, pero no podrás cambiar de referencia hasta que esta no haya sido cubierta en su totalidad.</li>
          <li><strong>¿Puedo avanzar a otra referencia si tengo un adeudo anterior?</strong> No. El sistema no permite avanzar a una referencia posterior hasta cubrir el monto total del pago anterior.</li>
          <li><strong>¿Qué sucede si elimino un pago?</strong> Al eliminar un pago, cualquier registro y comprobante relacionado a este pago será eliminado definitivamente del sistema.</li>
          <li><strong>¿Puedo aplicar descuentos a los pagos?</strong> El descuento solo está disponible a partir del paquete Estándar y debe introducirse en montos enteros, sin decimales.</li>
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

export default PagosSection;
