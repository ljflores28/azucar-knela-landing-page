import React from "react";
import ImgSvg from "../assets/ImgPersonal.svg";

const QuienSomos: React.FC = () => {
  return (
    <section id="QuienSomos">
      <h2 className="my-10 text-2xl font-merriweather sm:text-3xl xl:text-4xl">
        Bienvenido ¿Nos presentamos?
      </h2>
      <div className="flex items-center gap-8">
        <img
          className="w-[465px] h-[465px] aspect-square"
          src={ImgSvg}
          alt=""
        />
        <p className="text-xl font-light text-justify font-poppins -tracking-wider">
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
