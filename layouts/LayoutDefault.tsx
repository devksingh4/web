import "./tailwind.css";
import React from "react";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
