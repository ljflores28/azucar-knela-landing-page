import { Button } from "rsuite";
import HeaderH1 from "./atomos/HeaderH1";
import blob from '../assets/svg/blob.svg';
import { Props } from "../types/Interfaces";

const Hero : React.FC<Props> = ({ id }): JSX.Element => {
  return (
    <section id={id} className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      {/* MENSAJE */}
      <div className="flex flex-col justify-center gap-4 mx-auto">
        <HeaderH1>
          Las tortas más <br /> deliciosas de{" "}
          <span className="inline-block -rotate-12 text-violet-700">BA!</span>
        </HeaderH1>
        <p className="text-sm font-light font-poppins md:text-base xl:text-xl">
          Tortas personalizadas para toda ocasión.
          <br />
          Cada creación es una obra de arte, <br /> hecha con sabor y dulzura.
        </p>
        <div className="font-poppins xl:text-xl">
          <Button
            appearance="primary"
            size="lg"
            className="bg-[#fb7185] w-full sm:w-fit hover:bg-[#fb71cb] focus:bg-[#fb7185]"
            aria-label="Pedir presupuesto"
            href="#Formulario"
          >
            ¡Pedir presupuesto!
          </Button>
        </div>
      </div>
      {/* IMAGEN */}
      <div className="relative flex items-center justify-center mt-4 sm:mt-0">
        <img
          srcSet={blob}
          alt="Fondo decorativo en forma de blob"
          className="relative"
          style={{width: "-webkit-fill-available"}}
        />
        <img
          srcSet="images/cake-hero.webp"
          alt="Deliciosa torta personalizada"
          className="absolute"
        />
      </div>
    </section>
  );
}

export default Hero;