import { Link } from "react-router-dom";
import { Props } from "../types/Interfaces";


const Menu : React.FC<Props> = ({ id }): JSX.Element => {
    
    return (
        <section id={id} className="bg-white shadow-md flex flex-col justify-center items-center max-h-44 min-h-28 px-[10vw] sm:relative sm:flex-row sm:justify-between 2xl:justify-around">
          <div className="max-w-40">
            <img
              src="images/Logo-violeta.webp"
              alt="Logo de Azucar y Knela"
              className="mt-1 bg-white"
            />
          </div>
          <nav className="flex items-center gap-5 font-poppins">
            <Link
              role="button"
              rel="noopener noreferrer"
              to="/"
              aria-label="Ir al home del sitio"
              className="p-2 hover:text-violet-300 focus:text-violet-300"
            >
              Home
            </Link>
            <Link
              role="button"
              rel="noopener noreferrer"
              to='/catalogo-tortas-clasicas'
              aria-label="Ir a opiniones"
              className="p-2 hover:text-violet-300 focus:text-violet-300"
            >
              Catalogo
            </Link>
            <Link
              role="button"
              rel="noopener noreferrer"
              to="https://www.instagram.com/azucaryknela/"
              aria-label="Ir a contacto"
              className="p-2 hover:text-violet-300 focus:text-violet-300"
            >
              Instagram
            </Link>
          </nav>
        </section>
    );
  }
  
  export default Menu;