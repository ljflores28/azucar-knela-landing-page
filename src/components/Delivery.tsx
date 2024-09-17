import HeaderH2 from "./atomos/HeaderH2";

const Delivery: React.FC = () => {
  return (
    <section id="delivery">
      <HeaderH2>🛵 💨 ¡A un click de tu hogar!</HeaderH2>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        <div className="hidden p-10 sm:inline-block text-start">
          <h3 className="mb-5 text-2xl font-merriweather">¡Cerca de vos!</h3>
          <p className="text-xl font-poppins">
            En <strong>Azuca & Knela</strong>, queremos que disfrutes de nuestros exquisitos pasteles personalizados sin moverte de casa.
          </p>
          <p className="text-xl font-poppins">
            Por eso, nos encontrarás en <strong>Pedidos Ya</strong> y <strong>Rappi</strong>, listos para entregarte una explosión de sabor a la puerta de tu hogar.
          </p>
          <h3 className="mb-5 text-2xl font-merriweather">
            ¿Prefieres un trato más directo?
          </h3>
          <p className="text-xl font-poppins">
            Contáctanos por <strong>WhatsApp</strong> y te atenderemos con la misma dedicación y cariño. Con tan solo un clic, podemos endulzar tus momentos especiales.
          </p>
        </div>
        
        <div className="grid max-w-lg gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:p-10 justify-self-center">
          {/* Pedidos Ya */}
          <a
            className="w-32 transition duration-300 ease-in-out rounded-full md:w-40 xl:w-44 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="images/pedidosya-logo.png" alt="PedidosYa Logo" className="w-32 rounded-full md:w-40 xl:w-44" />
          </a>

          {/* Rappi */}
          <a
            className="w-32 transition duration-300 ease-in-out rounded-full md:w-40 xl:w-44 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            href="#"
          >
            <img src="images/Rappi-logo.png" alt="Rappi Logo" className="w-32 rounded-full md:w-40 xl:w-44" />
          </a>

          {/* WhatsApp */}
          <a
            className="w-32 transition duration-300 ease-in-out rounded-full md:w-40 xl:w-44 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
            href="https://wa.me/XXXXXXXXXXX"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="images/whatsapp-logo.png" alt="WhatsApp Logo" className="w-32 rounded-full md:w-40 xl:w-44" />
          </a>

          {/* Logo */}
          <div className="w-32 rounded-full md:w-40 xl:w-44">
            <img className="w-32 rounded-full md:w-40 xl:w-44" src="Logo-circular-violeta.png" alt="Azuca & Knela Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
