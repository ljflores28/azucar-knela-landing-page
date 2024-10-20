import ImgSvg from "../assets/svg/ImgPersonal.svg";
import { Props } from "../types/Interfaces";
import HeaderH2 from "./atomos/HeaderH2";

const QuienSomos: React.FC<Props> = ({ id }): JSX.Element => {
  return (
    <section id={id}>
      <HeaderH2>¿Quiénes somos? 🤝</HeaderH2>
      <div className="grid items-center gap-4 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1 justify-items-center">
        <img className=" w-[75%] aspect-square" src={ImgSvg} alt="" />
        <p className="text-lg text-left font-extralight font-poppins -tracking-wider">
          Azúcar y Knela nace del sueño de Karla, una apasionada profesional del
          mundo de la pastelería. Con una sólida trayectoria en reconocidas
          empresas de Caracas, Karla decidió llevar su talento a Buenos Aires,
          donde fundó su propia marca. Hoy, con una visión innovadora y un
          enfoque en la personalización, crea diseños únicos y llenos de sabor,
          demostrando en cada proyecto su amor por la repostería y su compromiso
          con la calidad.
        </p>
      </div>
    </section>
  );
};

export default QuienSomos;
