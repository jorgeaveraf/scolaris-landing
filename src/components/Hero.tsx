const Hero = () => {
    return (
      <section className="bg-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-scolBlue mb-4">
          Gestiona tu escuela en un solo click!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Inscripciones, pagos y reportes automáticos. Todo en un solo lugar.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-scolBlue text-white px-6 py-3 rounded-lg shadow-md hover:bg-scolLight transition">
            Probar gratis 1 mes
          </button>
          <button className="bg-white text-scolBlue px-6 py-3 border border-scolBlue rounded-lg hover:bg-scolGray transition">
            Ver demo
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  