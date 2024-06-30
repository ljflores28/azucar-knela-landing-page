// SeccionResenas.tsx
import React from 'react';
import Resenas from '../Resenas';
import { FaStar } from 'react-icons/fa';

const CarruselResenas: React.FC = () => {
  return (
    <section className="bg-white flex flex-col xl:gap-10 text-center sm:p-6 xl:p-12">
      <h1 className="font-righteous sm:text-xl xl:text-4xl"> ⭐ Así nos opinan ⭐</h1>
      <div className='grid sm:grid-cols-1 sm:grid-rows-2  xl:grid-cols-8 '>
        <div className='flex flex-col justify-center items-center gap-2 col-span-2'>
            <h1 className='font-righteous text-4xl'>Excelente</h1>
            <div className='flex text-4xl'>
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
              <FaStar className={"text-yellow-400"} />
            </div>
            <p className=' font-sourceSans text-lg'>A base de <strong>+50 reseñas</strong></p>
            <img src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg" alt="" className=' w-40' />
        </div>
        <div className='col-span-6'>
          <Resenas />
        </div>

      </div>
    </section>
  );
};

export default CarruselResenas;
