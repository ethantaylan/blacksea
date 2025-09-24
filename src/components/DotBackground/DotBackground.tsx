import React from "react";

export const DotBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(1,1,1, 0.8) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
            opacity: 0.2,
          }}
        />
        {/* Radial gradient overlay for depth effect */}
      </div>
    </div>
  );
};
