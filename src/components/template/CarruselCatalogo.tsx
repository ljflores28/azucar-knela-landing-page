// SeccionResenas.tsx
import React from 'react';
import Catalogo from '../Catalogo';

const CarruselCatalogo: React.FC = () => {
  return (
    <section id="catalogo">
     <h2 className="my-10 text-2xl font-merriweather sm:text-3xl xl:text-4xl">🍰 Así lo hacemos 🍪</h2>
      <Catalogo />
    </section>
  );
};

export default CarruselCatalogo;
