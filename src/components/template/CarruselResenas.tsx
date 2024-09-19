import Resenas from '../Resenas';
import { FaStar } from 'react-icons/fa';
import HeaderH2 from '../atomos/HeaderH2';
import { Props } from '../../types/Interfaces';

const CarruselResenas : React.FC<Props> = ({ id }): JSX.Element => {
  return (
    <section id={id} aria-labelledby="reseñas-title">
      <HeaderH2>⭐ Así nos opinan ⭐</HeaderH2>
      <div className='grid grid-cols-1 xl:grid-cols-8 xl:gap-6'>
        <div className='flex flex-col items-center justify-center sm:mb-4 sm:gap-2 sm:col-span-2'>
          <h2 className='text-2xl font-merriweather sm:text-3xl xl:text-4xl'>Excelente</h2>
          <div role='img' className='flex text-xl sm:text-2xl xl:text-4xl' aria-label="Calificación 5 de 5 estrellas">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" aria-hidden="true" />
            ))}
          </div>
          <p className='text-sm font-poppins md:text-md xl:text-lg'>
            <strong>+50 reseñas</strong>
          </p>
          <img 
            srcSet="images/google-logo.webp" 
            alt="Logotipo de Google" 
            className='w-8 sm:w-24 '
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
