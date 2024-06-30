// SeccionResenas.tsx
import React from 'react';
import Catalogo from '../Catalogo';

const CarruselCatalogo: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-10 text-center sm:p-8 md:p-8 xl:p-12">
      <h1 className="font-righteous sm:text-xl md:text-2xl xl:text-4xl">🍰 Así lo hacemos 🍪</h1>
      <Catalogo />
    </section>
  );
};

export default CarruselCatalogo;
