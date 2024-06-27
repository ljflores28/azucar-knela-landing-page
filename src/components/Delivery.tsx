const Delivery: React.FC = () => {
  return (
    <section className="bg-white flex flex-col gap-10 text-center p-12">
      <h1 className="font-righteous text-4xl text-center">
        🛵 💨 Estamos a un click de tu hogar!
      </h1>
      <div className="grid grid-cols-2">
        <div className=" text-start p-16">
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
        <div className="grid grid-cols-2 p-16 gap-2 max-w-xl justify-self-center">
          <a
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300"
            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu"
          >
            <img src="pedidosya-logo.png" alt="" className=" rounded-lg" />
          </a>
          <a className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300">
            <img src="Rappi-logo.png" alt="" className=" rounded-lg" />
          </a>
          <a className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300">
            <img src="whatsapp-logo.png" alt="" className=" rounded-lg" />
          </a>
          <div className="p-5 ">
            <img src="Logo-circular-violeta.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
