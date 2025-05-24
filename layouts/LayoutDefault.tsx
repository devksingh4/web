import { BasicNavbar } from "../components/BasicNavbar";
import { portfolio } from "../data";
import "./tailwind.css";
import React from "react";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-slate-900 text-white min-h-screen flex flex-col">
    {children}
    <footer className="border-t border-slate-700 bg-slate-800 py-4 text-center text-slate-400">
      <p>&copy; {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
    </footer>
  </div>;
}
