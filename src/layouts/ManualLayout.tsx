// src/layouts/ManualLayout.tsx

import { useState } from "react";
import { Outlet } from "react-router-dom";
import ManualsMenu from "../pages/manuals/ManualsMenu";

const ManualLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-1 pb-16 px-4 max-w-7xl mx-auto text-gray-800">
  {/* Sticky solo visible en móvil */}
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

  <div className="flex gap-10">
    <aside className={`shrink-0 h-fit md:sticky md:top-24 ${isOpen ? "block" : "hidden"} md:block w-64`}>
      <ManualsMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </aside>

    <main className="flex-1 space-y-24 pt-4">
      <Outlet />
      <div id="portal-root" />
    </main>
  </div>
</div>
  );
};

export default ManualLayout;
