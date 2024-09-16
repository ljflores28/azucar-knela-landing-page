// SeccionResenas.tsx
import React from 'react';
import Catalogo from '../Catalogo';
import HeaderH2 from '../atomos/HeaderH2';

const CarruselCatalogo: React.FC = () => {
  return (
    <section id="catalogo">
     <HeaderH2>🍰 Así lo hacemos 🍪</HeaderH2>
      <Catalogo />
    </section>
  );
};

export default CarruselCatalogo;
