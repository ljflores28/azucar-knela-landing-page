import React from 'react';
import Resenas from '../Resenas';
import { FaStar } from 'react-icons/fa';
import HeaderH2 from '../atomos/HeaderH2';

const CarruselResenas: React.FC = () => {
  return (
    <section id="reseñas" aria-labelledby="reseñas-title">
      <HeaderH2>⭐ Así nos opinan ⭐</HeaderH2>
      <div className='grid grid-cols-1 xl:grid-cols-8 xl:gap-6'>
        <div className='flex flex-col items-center justify-center sm:mb-4 sm:gap-2 sm:col-span-2'>
          <h2 className='text-2xl font-merriweather sm:text-3xl xl:text-4xl'>Excelente</h2>
          <div className='flex text-xl sm:text-2xl xl:text-4xl' aria-label="Calificación 5 de 5 estrellas">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" aria-hidden="true" />
            ))}
          </div>
          <p className='text-sm font-poppins md:text-md xl:text-lg'>
            A base de <strong>+50 reseñas</strong>
          </p>
          <img 
            src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg" 
            alt="Logotipo de Google" 
            className='w-28 sm:w-36 xl:w-40'
          />
        </div>
        <div className='sm:col-span-6'>
          <Resenas />
        </div>
      </div>
    </section>
  );
};

export default CarruselResenas;
