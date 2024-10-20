import { RiWhatsappLine } from "react-icons/ri";
import { Props } from "../types/Interfaces";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import CatalogoClasico from "./page/CatalogoClasico";

const BannerCTA : React.FC<Props> = ({ id }): JSX.Element =>  {

  return (
    <section id={id} className="w-full h-fit bg-[#B0AEEF] p-7 sm:p-14">
      <div className="flex flex-wrap items-center gap-3 justify-evenly">
        <p className="h-auto font-semibold text-center w-[50%] font-poppins">
          ¿Buscas algo más simple? Visita nuestro catálogo de tortas clásicas.
          <br />
        </p>
        <a
          role="button"
          href="https://wa.me/c/5491167953259"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 sm:p-4 rounded-sm bg-[#25D366] hover:bg-green-500 transition-colors duration-300 ease-in-out"
          aria-label="Ir al catálogo de tortas clásicas"
        >
          <p className="text-sm font-semibold text-white font-poppins sm:text-xl">
            Ir al catálogo
          </p>
          <RiWhatsappLine fill="#ffff" size={32} />
        </a> 
        {/* <Link
          role="button"
          to='/tortas-clasicas'
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 sm:p-4 rounded-sm bg-[#25D366] hover:bg-green-500 transition-colors duration-300 ease-in-out"
          aria-label="Ir al catálogo de tortas clásicas"
        >
          <p className="text-sm font-semibold text-white font-poppins sm:text-xl">
            Ir al catálogo
          </p>
          <RiWhatsappLine fill="#ffff" size={32} />
        </Link> */}
      </div>
    </section>
  );
};

export default BannerCTA;
