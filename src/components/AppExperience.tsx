import { FC } from "react";

const AppExperience: FC = () => {
  return (
    <section className="bg-scolGray py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-scolBlue mb-4">
            Una app que funciona para todos
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Ya sea desde computadora, celular o tablet, Scolaris te permite gestionar tu escuela de forma sencilla, estés donde estés.
          </p>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li>✅ Accede desde cualquier dispositivo</li>
            <li>✅ Sin instalaciones complicadas</li>
            <li>✅ Experiencia intuitiva para todos los usuarios</li>
          </ul>
        </div>

        {/* Image / Mockup */}
        <div className="md:w-1/2">
          <img
            src="src/assets/dashboard.svg"
            alt="Vista previa de la app"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AppExperience;
