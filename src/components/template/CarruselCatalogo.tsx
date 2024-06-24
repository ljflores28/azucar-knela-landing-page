// SeccionResenas.tsx
import React from 'react';
import Catalogo from '../Catalogo';

const CarruselCatalogo: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-10 text-center p-12">
      <h1 className="font-righteous text-4xl">Conoce nuestro trabajo</h1>
      <Catalogo />
    </section>
  );
};

export default CarruselCatalogo;
