import { useEffect, useState } from "react";
import AppLayout from "./components/AppLayout/AppLayout";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed w-3 h-3 rounded-full border-2 border-white shadow-2xl bg-black pointer-events-none z-[9999] transition-transform duration-200"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <AppLayout />
    </>
  );
}
