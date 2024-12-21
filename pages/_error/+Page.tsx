import React from "react";
import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
  const { is404 } = usePageContext();
  return (
    <div className="bg-slate-900 text-white">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-between bg-slate-900">
        <div className="flex-grow flex flex-col items-center justify-center py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {is404 ? "Page Not Found" : "An Error OPccurred"}
            </h1>

            <p className="text-gray-300 mb-6 text-justify max-w-2xl px-4 text-lg">
              Perhaps you would like to <a href='/' className="text-blue-500 hover:text-blue-800">go home</a>?
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
