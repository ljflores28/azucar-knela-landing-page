// SeccionResenas.tsx
import React from 'react';
import Resenas from '../Resenas';
import { FaStar } from 'react-icons/fa';

const CarruselResenas: React.FC = () => {
  return (
    <section id="reseñas">
      <h2 className="font-merriweather my-10 sm:my-14 text-2xl sm:text-3xl xl:text-4xl"> ⭐ Así nos opinan ⭐</h2>
      <div className='grid grid-cols-1 sm:grid-cols-8 sm:gap-6 '>
        <div className='flex flex-col justify-center items-center sm:gap-2 sm:col-span-2'>
            <h1 className='font-merriweather text-2xl sm:text-3xl xl:text-4xl '>Excelente</h1>
            <div className='flex text-xl sm:text-2xl xl:text-4xl '>
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
            </div>
            <p className='font-poppins text-sm md:text-md xl:text-lg'>A base de <strong>+50 reseñas</strong></p>
            <img src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg" alt="" className='w-28 sm:w-36 xl:w-40' />
        </div>
        <div className='sm:col-span-6'>
          <Resenas />
        </div>
      </div>
    </section>
  );
};

export default CarruselResenas;
