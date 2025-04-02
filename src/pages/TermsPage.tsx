import { FC } from "react";

const TermsPage: FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-gray-800 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-scolBlue mb-8">
        Términos y Condiciones Generales
      </h1>

      <p className="text-sm text-gray-600 mb-1">Uso de Scolaris</p>
      <p className="text-sm text-gray-600 mb-6">Última actualización: Marzo 2025</p>

      <p className="mb-6">
        Bienvenido a Scolaris. Este documento reúne los términos legales que regulan el uso
        de nuestra plataforma, los servicios ofrecidos en modalidad gratuita o de pago, y el
        tratamiento de los datos de nuestros usuarios y clientes.
      </p>

      <h2 className="font-semibold text-lg mb-2">Índice</h2>
      <ol className="list-decimal ml-6 mb-8 space-y-1 text-sm text-gray-700">
        <li>Términos del periodo de prueba (30 días)</li>
        <li>Términos de uso general del sistema</li>
        <li>Términos de contratación para clientes</li>
        <li>Política de privacidad</li>
        <li>Descripción de planes y servicios</li>
        <li>Limitación de responsabilidad</li>
        <li>Modificaciones y vigencia</li>
      </ol>

      <h3 className="text-lg font-bold text-scolBlue mb-2">1. Términos del periodo de prueba</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2 text-sm">
        <li>La prueba es personal, no transferible y tiene duración fija.</li>
        <li>El sistema puede tener limitaciones parciales.</li>
        <li>No hay obligación de contratación posterior.</li>
        <li>Los datos ingresados serán eliminados si no se contrata una suscripción.</li>
        <li>Se requiere aceptación expresa mediante formulario digital.</li>
      </ul>

      <h3 className="text-lg font-bold text-scolBlue mb-2">2. Términos de uso general</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2 text-sm">
        <li>Usar el sistema solo con fines educativos y administrativos.</li>
        <li>No compartir credenciales con terceros.</li>
        <li>No intentar modificar o copiar el sistema sin autorización.</li>
        <li>Cumplir con las normativas establecidas en este documento.</li>
      </ul>

      <h3 className="text-lg font-bold text-scolBlue mb-2">3. Términos de contratación</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2 text-sm">
        <li>Los servicios y beneficios correspondientes a su paquete.</li>
        <li>Las condiciones de renovación, suspensión o cancelación.</li>
        <li>Las políticas de soporte y configuración incluidas.</li>
        <li>Las obligaciones de pago y uso responsable.</li>
        <li>
          El contrato entra en vigencia desde la fecha de activación del sistema y se
          complementa con los datos provistos en el formulario de configuración inicial.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-scolBlue mb-2">4. Política de privacidad</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2 text-sm">
        <li>Todos los datos ingresados por el cliente o sus usuarios son propiedad del cliente.</li>
        <li>Scolaris no vende ni comparte información con terceros.</li>
        <li>Se utilizan servicios de almacenamiento seguros (Google Cloud).</li>
        <li>Se implementan medidas técnicas y organizativas para proteger la información.</li>
      </ul>

      <h3 className="text-lg font-bold text-scolBlue mb-2">5. Descripción de planes y servicios</h3>

      <ul className="list-disc ml-6 mb-4 space-y-2 text-sm">
        <li><strong>Plan Básico:</strong> Acceso a módulos esenciales, soporte por correo, automatizaciones predefinidas.</li>
        <li><strong>Plan Estándar:</strong> Incluye lo anterior + personalización, automatizaciones intermedias, soporte extendido.</li>
        <li><strong>Plan Premium:</strong> Incluye todo lo anterior + reportes descargables, automatizaciones avanzadas, soporte prioritario.</li>
        <li><strong>Servicios adicionales (Add-ons):</strong> Usuarios extra, tickets de soporte, expansión de alumnos, WhatsApp, chatbot, pasarela de pagos, carga masiva, correos institucionales.</li>
      </ul>
      <p className="text-sm text-gray-600 mb-6">
        Nota: Los montos asociados a cada plan o servicio se presentan por separado en la propuesta comercial o el formulario de contratación.
      </p>

      <h3 className="text-lg font-bold text-scolBlue mb-2">6. Limitación de responsabilidad</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2 text-sm">
        <li>
          Scolaris no se hace responsable por decisiones tomadas con base en los datos del sistema.
        </li>
        <li>
          La disponibilidad del sistema depende de factores técnicos externos (servicios de terceros).
        </li>
        <li>
          El cliente es responsable del uso interno y el resguardo de sus accesos.
        </li>
      </ul>

      <h3 className="text-lg font-bold text-scolBlue mb-2">7. Modificaciones y vigencia</h3>
      <ul className="list-disc ml-6 mb-6 space-y-2 text-sm">
        <li>Este documento puede ser modificado sin previo aviso.</li>
        <li>La versión más actualizada estará siempre disponible en esta página.</li>
        <li>El uso continuo del sistema implica la aceptación de las condiciones aquí descritas.</li>
      </ul>
    </section>
  );
};

export default TermsPage;
