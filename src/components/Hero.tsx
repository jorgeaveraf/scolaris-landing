// Hero.tsx
import { FC } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import { useVideoModalStore } from "../store/useVideoModalStore";
import heroImg from "../assets/hero.svg"; // ajusta la ruta si está en otra carpeta

interface HeroProps {
  openModal: () => void;
}


const Hero: FC<HeroProps> = ({ openModal }) => {
  const { ref, inView } = useSectionInView();
  const openVideo = useVideoModalStore((state) => state.openVideo);

  return (
    <section
      ref={ref}
      id="hero"
      className={`bg-white py-10 px-6 transition-all duration-700 ${
        inView ? "opacity-100 blur-0 scale-100" : "opacity-40 blur-sm scale-[0.98]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-scolBlue leading-tight tracking-tight mb-3 font-avenir">
              Gestiona tu escuela con un click!
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-sans">
              Inscripciones, pagos y reportes automáticos. Todo en un solo lugar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={openModal}
                className="bg-scolBlue text-white px-6 py-3 rounded-full shadow hover:bg-scolLight hover:scale-105 hover:shadow-lg transition-transform duration-200"
              >
                Probar gratis 1 mes
              </button>
              <button
                onClick={() => openVideo("1T4WO5aHq3qqGsZ06zuyEQC5FBEgB_Bb1")}
                className="border border-scolBlue text-scolBlue px-6 py-3 rounded-full hover:bg-scolGray hover:scale-105 hover:shadow-lg transition-transform duration-200"
              >
                Ver demo
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={heroImg}
              alt="Vista previa de ScolarisQ"
              className="w-full max-w-md mx-auto md:ml-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
