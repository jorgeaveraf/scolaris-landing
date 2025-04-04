import { FC } from "react";

const Privacy: FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-gray-800 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-scolBlue mb-8">
        Aviso de Privacidad
      </h1>

      <p className="text-sm text-gray-600 mb-1">Scolaris</p>
      <p className="text-sm text-gray-600 mb-6">Última actualización: Marzo 2025</p>

      <p className="mb-6">
        Scolaris se compromete a proteger la privacidad y la integridad de la información
        gestionada dentro de esta aplicación. Al usar esta app, aceptas las siguientes prácticas de datos:
      </p>

      <h2 className="font-semibold text-lg mb-2">Propiedad de los datos</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          Los datos ingresados en la app pertenecen exclusivamente a la institución que contrató el servicio.
        </li>
        <li>
          Scolaris no reclama propiedad sobre ninguna información institucional o personal cargada.
        </li>
      </ul>

      <h2 className="font-semibold text-lg mb-2">Tratamiento de los datos</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>Toda la información se almacena de forma segura utilizando servicios en la nube de Google.</li>
        <li>Ningún dato será vendido, transferido ni compartido con terceros.</li>
        <li>
          Solo el personal técnico autorizado podrá acceder a los datos del sistema cuando sea estrictamente necesario para soporte.
        </li>
      </ul>

      <h2 className="font-semibold text-lg mb-2">Responsabilidad del usuario</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          Los usuarios deben asegurarse de que los datos personales ingresados cumplan con las normativas de privacidad aplicables.
        </li>
        <li>
          Es responsabilidad de la institución informar a sus usuarios (ej. personal, tutores, familias) sobre el uso de sus datos.
        </li>
      </ul>

      <h2 className="font-semibold text-lg mb-2">Seguridad</h2>
      <ul className="list-disc ml-6 mb-6 space-y-2">
        <li>
          Se realizan respaldos regulares y se aplican protocolos de seguridad y cifrado para proteger la información almacenada.
        </li>
        <li>El acceso está protegido mediante autenticación segura.</li>
      </ul>

    </section>
  );
};

export default Privacy;
