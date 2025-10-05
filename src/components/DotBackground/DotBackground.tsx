import React, { useEffect, useRef } from "react";

export const DotBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const spacing = 24;
    const dotSize = 1;
    const magnetRadius = 100;
    const magnetStrength = 30;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let offsetX = 0;
          let offsetY = 0;

          if (distance < magnetRadius) {
            const force = (1 - distance / magnetRadius) * magnetStrength;
            offsetX = (dx / distance) * force;
            offsetY = (dy / distance) * force;
          }

          ctx.fillStyle = "rgba(1, 1, 1, 0.8)";
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-20"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
};
