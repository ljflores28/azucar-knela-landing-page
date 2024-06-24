// SeccionResenas.tsx
import React from 'react';
import Resenas from '../Resenas';

const CarruselResenas: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-10 text-center p-12">
      <h1 className="font-righteous text-4xl">Esto opinan nuestros clientes</h1>
      <Resenas />
    </section>
  );
};

export default CarruselResenas;
