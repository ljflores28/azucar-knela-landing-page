// SeccionResenas.tsx
import React from 'react';
import Catalogo from '../Catalogo';

const CarruselCatalogo: React.FC = () => {
  return (
    <section id="catalogo">
     <h2 className="font-merriweather my-10 sm:my-14 sm:text-xl md:text-2xl xl:text-4xl">🍰 Así lo hacemos 🍪</h2>
      <Catalogo />
    </section>
  );
};

export default CarruselCatalogo;
