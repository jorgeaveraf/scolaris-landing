// src/layouts/ManualLayout.tsx

import { Outlet } from "react-router-dom";
import ManualsMenu from "../pages/manuals/ManualsMenu";

const ManualLayout = () => {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-gray-800 flex gap-10">
      <aside className="w-64 shrink-0 sticky top-24 h-fit">
        <ManualsMenu />
      </aside>
      <main className="flex-1 space-y-24">
        <Outlet />
        <div id="portal-root" />
      </main>
    </div>
  );
};

export default ManualLayout;
