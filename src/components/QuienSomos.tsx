import React from "react";
import ImgSvg from "../assets/ImgPersonal.svg";
import HeaderH2 from './atomos/HeaderH2';

const QuienSomos: React.FC = () => {
  return (
    <section id="QuienSomos">
      <HeaderH2>Bienvenido ¿Nos presentamos?</HeaderH2>
      <div className="grid items-center justify-between sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1">
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
