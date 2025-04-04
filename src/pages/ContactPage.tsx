import { FC, useState } from "react";
import { submitContact } from "../components/forms/submitContact";


const ContactPage: FC = () => {
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

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
        await submitContact(form);
        setSubmitted(true);
      } catch (err) {
        alert("Hubo un problema al enviar el mensaje.");
      }
    };

  return (
    <section className="max-w-2xl mx-auto py-20 px-6 text-gray-800 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-scolBlue mb-8 text-center">
        Contáctanos
      </h1>

      {submitted ? (
        <div className="text-center text-scolBlue font-semibold">
          ¡Nos pondremos en contacto para ayudarte a empezar!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
            placeholder="Teléfono (con WhatsApp)"
            value={form.telefono}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
            pattern="[0-9]{10,}"
            inputMode="numeric"
            title="Ingresa al menos 10 dígitos numéricos"
            />
          <button
            type="submit"
            className="w-full bg-scolBlue text-white py-2 rounded hover:bg-scolDark transition hover:scale-105 hover:shadow-lg"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;
