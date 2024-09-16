import HeaderH2 from "./atomos/HeaderH2";

const Delivery: React.FC = () => {
  return (
    <section id="delivery">
      <HeaderH2 >🛵 💨 A un click de tu hogar!</HeaderH2>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        <div className="hidden p-10 sm:inline-block text-start">
          <h3 className="mb-5 text-2xl font-merriweather">¡Cerca de vos!</h3>
          <p className="text-xl font-poppins">
            En <strong>Azuca & Knela</strong>, Queremos que disfrutes de
            nuestros exquisitos pasteles personalizados sin moverte de casa.
            <br />
            <br />
            Por eso, nos encontraras en <strong>Pedidos Ya</strong> y
            <strong>Rappi</strong>, listos para entregarte una explosión de
            sabor a la puerta de tu hogar. <br />
            <br />
            <h3 className="mb-5 text-2xl font-merriweather">
              ¿Prefieres un trato más directo?
            </h3>
            Contáctanos por <strong>WhatsApp</strong> y te atenderemos con la
            misma dedicación y cariño. Con tán solo un clic, podemos endulzar
            tus momentos especiales.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:p-10 justify-self-center">
          <a
            className="transition duration-300 ease-in-out rounded-full sm:size-32 md:size-40 xl:size-44 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu"
          >
            <img src="pedidosya-logo.png" alt="" className="rounded-full sm:size-32 md:size-40 xl:size-44" />
          </a>
          <a className="transition duration-300 ease-in-out rounded-full sm:size-32 md:size-40 xl:size-44 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img src="Rappi-logo.png" alt="" className="rounded-full sm:size-32 md:size-40 xl:size-44" />
          </a>
          <a className="transition duration-300 ease-in-out rounded-full ssm:size-32 md:size-40 xl:size-44 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img src="whatsapp-logo.png" alt="" className="rounded-full sm:size-32 md:size-40 xl:size-44" />
          </a>
          <div className="sm:size-32 md:size-40 xl:size-44rounded-full">
            <img className="rounded-full sm:size-32 md:size-40 xl:size-44" src="Logo-circular-violeta.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
