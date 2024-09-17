import React from "react";

// Componente para el encabezado
const HeaderH2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="my-10 text-2xl font-merriweather sm:text-3xl xl:text-4xl">
      {children}
    </h2>
  );

export default HeaderH2;