import React from "react";

const ContenedorDeMain: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <main className="flex flex-col gap-8 text-center sm:m-20">
        {children}
      </main>
    </>
  );
};

export default ContenedorDeMain;
