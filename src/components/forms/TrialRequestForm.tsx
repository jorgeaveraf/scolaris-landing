import { FC, useState, useEffect } from "react";

interface Props {
  onSuccess: () => void;
}

const TrialRequestForm: FC<Props> = ({ onSuccess }) => {
  const [form, setForm] = useState({
    colegio: "",
    nombre: "",
    correo: "",
    telefono: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        onSuccess(); // Cierra el modal
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted, onSuccess]);

  return submitted ? (
    <div className="text-center text-scolBlue font-semibold animate-fade-in-out">
      ¡Nos pondremos en contacto para ayudarte a empezar!
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <h2 className="text-xl font-bold text-scolBlue mb-2">
        ¡Comienza gratis hoy mismo!
      </h2>
      <input
        type="text"
        name="colegio"
        placeholder="Nombre del colegio"
        value={form.colegio}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
        required
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del director o persona de contacto"
        value={form.nombre}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
        required
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={form.correo}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
        required
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono (con Whatsapp)"
        value={form.telefono}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
        required
      />
      <button
        type="submit"
        className="w-full bg-scolBlue text-white py-2 rounded hover:bg-scolDark transition hover:scale-105 hover:shadow-lg"
      >
        Comenzar prueba
      </button>
    </form>
  );
};

export default TrialRequestForm;
