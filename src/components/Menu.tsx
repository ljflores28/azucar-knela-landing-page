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
            <a
              href="#Catalogo"
              aria-label="Ir al catálogo"
              className="p-2 hover:text-violet-300 focus:text-violet-300"
            >
              Catálogo
            </a>
            <a
              href="#Reseñas"
              aria-label="Ir a opiniones"
              className="p-2 hover:text-violet-300 focus:text-violet-300"
            >
              Opiniones
            </a>
            <a
              href="#Footer"
              aria-label="Ir a contacto"
              className="p-2 hover:text-violet-300 focus:text-violet-300"
            >
              Contacto
            </a>
          </nav>
        </section>
    );
  }
  
  export default Menu;