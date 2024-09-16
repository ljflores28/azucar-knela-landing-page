import React from "react";

// Componente para el encabezado
const HeaderH1: React.FC<{ children : React.ReactNode }> = ( { children }) => (
    <h1 className="font-merriweather xs:mt-5 sm:mt-0 text-3xl leading-[3.0rem] md:text-4xl md:leading-[4.0rem] xl:text-6xl xl:leading-[5.0rem]" >
      {children}
    </h1>
  );

export default HeaderH1;