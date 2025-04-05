import { useState } from "react";
import { Outlet } from "react-router-dom";
import ManualsMenu from "../pages/manuals/ManualsMenu";

const ManualLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-1 pb-16 px-4 max-w-7xl mx-auto text-gray-800">
      {/* Sticky en móvil para el botón "Ver más" */}
      <div className="md:hidden sticky top-20 z-40 bg-white mb-4">
        <div className="flex justify-center border-b py-1">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-scolBlue text-sm font-semibold tracking-wide hover:text-scolDark transition"
          >
            Ver más
          </button>
        </div>
      </div>

      {/* Contenedor flexible para menú y contenido */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Menú lateral */}
        <aside
          className={`
            w-full md:w-64 shrink-0 
            ${isOpen ? "block bg-white shadow-md z-30" : "hidden"} 
            md:block sticky top-24 self-start h-fit
          `}
        >
          <ManualsMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </aside>


        {/* Contenido principal */}
        <main className="flex-1 space-y-24 pt-4">
          <Outlet />
          <div id="portal-root" />
        </main>
      </div>
    </div>
  );
};

export default ManualLayout;
