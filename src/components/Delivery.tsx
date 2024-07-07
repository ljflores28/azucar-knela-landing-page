const Delivery: React.FC = () => {
  return (
    <>
      <h1 className="font-righteous sm:text-xl md:text-2xl xl:text-4xl text-center">
        🛵 💨 A un click de tu hogar!
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        <div className=" hidden sm:inline-block text-start p-10">
          <h2 className=" text-2xl font-righteous mb-5">¡Cerca de vos!</h2>
          <p className=" text-xl font-sourceSans">
            En <strong>Azuca & Knela</strong>, Queremos que disfrutes de
            nuestros exquisitos pasteles personalizados sin moverte de casa.
            <br />
            <br />
            Por eso, nos encontraras en <strong>Pedidos Ya</strong> y
            <strong>Rappi</strong>, listos para entregarte una explosión de
            sabor a la puerta de tu hogar. <br />
            <br />
            <h2 className=" text-2xl font-righteous mb-5">
              ¿Prefieres un trato más directo?
            </h2>
            Contáctanos por <strong>WhatsApp</strong> y te atenderemos con la
            misma dedicación y cariño. Con tán solo un clic, podemos endulzar
            tus momentos especiales.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:p-10 gap-5 max-w-lg justify-self-center">
          <a
            className="sm:size-32 md:size-40 xl:size-44 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 rounded-full"
            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu"
          >
            <img src="pedidosya-logo.png" alt="" className="sm:size-32 md:size-40 xl:size-44 rounded-full" />
          </a>
          <a className="sm:size-32 md:size-40  xl:size-44 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 rounded-full">
            <img src="Rappi-logo.png" alt="" className="sm:size-32 md:size-40  xl:size-44 rounded-full" />
          </a>
          <a className="ssm:size-32 md:size-40  xl:size-44 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 rounded-full">
            <img src="whatsapp-logo.png" alt="" className="sm:size-32  md:size-40 xl:size-44 rounded-full" />
          </a>
          <div className="sm:size-32  md:size-40 xl:size-44rounded-full">
            <img className="sm:size-32 md:size-40 xl:size-44 rounded-full" src="Logo-circular-violeta.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
