import ImgSvg from "../assets/svg/ImgPersonal.svg";
import { Props } from "../types/Interfaces";
import HeaderH2 from './atomos/HeaderH2';

const QuienSomos : React.FC<Props> = ({ id }): JSX.Element => {
  return (
    <section id={id}>
      <HeaderH2>Bienvenido ¿Nos presentamos?</HeaderH2>
      <div className="grid items-center gap-4 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1 justify-items-center">
        <img
          className=" w-[75%] aspect-square"
          src={ImgSvg}
          alt=""
        />
        <p className="text-lg text-left font-extralight font-poppins -tracking-wider">
          Hace 7 años llegamos desde Venezuela a Buenos Aires con pocas cosas,
          pero con muchas ganas. Tras mucha dedicación, logramos fundar nuestra
          pastelería de pasteles personalizados, donde cada creación es única,
          como tus momentos especiales. Nos enorgullece endulzar esta ciudad que
          ahora es nuestro hogar.
        </p>
      </div>
    </section>
  );
};

export default QuienSomos;
