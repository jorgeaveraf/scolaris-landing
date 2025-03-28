import { FC } from "react";

const Testimonial: FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl italic text-gray-800 mb-6">
          “Scolaris ha transformado la manera en que administramos nuestra escuela. Es simple, ordenado y funciona perfecto.”
        </p>
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/80?img=3"
            alt="Testimonio"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-semibold text-scolBlue">Laura Méndez</p>
          <p className="text-sm text-gray-500">Directora, Colegio Ejemplo</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
