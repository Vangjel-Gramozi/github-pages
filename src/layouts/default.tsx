import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs.tsx";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
        <div className="flex justify-evenly mb-4">
          <Breadcrumbs />
        </div>
      </div>
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        <Outlet />
      </main>
    </div>
  );
}
