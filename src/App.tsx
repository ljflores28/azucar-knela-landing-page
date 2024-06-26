import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Divider } from "./components/Divider";
import CarruselCatalogo from "./components/template/CarruselCatalogo";
import CarruselResenas from "./components/template/CarruselResenas";
import ParallaxSection from "./components/template/ParallaxSection";
import useScrollSection from "./hook/useScrollTrasicion";
import Footer from "./components/Footer";

const App: React.FC = () => {

  const visibleSection = useScrollSection('.parallax-section');
  
  return (
    <main className="">
      <ParallaxSection
        id="header"
        backgroundImage="/public/bg-rosa.jpg"
        nextBackgroundImage="/public/bg-turquesa.jpg"
        isVisible={visibleSection === 0}
      >
        <Header />
        <Hero />
      </ParallaxSection>

      <ParallaxSection
        id="section2"
        backgroundImage="/public/bg-turquesa.jpg"
        nextBackgroundImage="/public/bg-rosa.jpg"
        prevBackgroundImage="/public/bg-turquesa.jpg"
        isVisible={visibleSection === 1}
      >
        <Divider id="section2-1" fill="#FFB1D6" />
        <CarruselCatalogo />
      </ParallaxSection>

      <ParallaxSection
        id="section3"
        backgroundImage="/public/bg-violeta.jpg"
        nextBackgroundImage="/public/bg-turquesa.jpg"
        isVisible={visibleSection === 2}
      >
        <Divider  id="section3-1"  fill="#88EADA" />
        <CarruselResenas />
      </ParallaxSection>

      <ParallaxSection
        id="section4"
        backgroundImage="/public/bg-rosa.jpg"
        nextBackgroundImage="/public/bg-violeta.jpg"
        isVisible={visibleSection === 3}
      >
        <Divider  id="section4-1"  fill="#B0AEEF" />
        <section className="bg-white flex flex-col gap-10 text-center p-12">
          <h1 className="font-righteous text-4xl text-center pt-10"> 🛵 💨 Estamos a un click de tu hogar! </h1>
          <div className="grid grid-cols-2">
            <div className=" text-justify p-12">
              <h2 className=" text-2xl font-righteous mb-5">¡Cerca de vos!</h2>
              <p className=" text-xl font-sourceSans">En <strong>Azuca & Knela</strong>, Queremos que disfrutes de nuestros exquisitos pasteles personalizados sin moverte de casa. <br /><br /> 
              Por eso, nos encontraras en <strong>Pedidos Ya</strong> y <strong>Rappi</strong>, listos para entregarte una explosión de sabor a la puerta de tu hogar. <br /><br />
              <h2 className=" text-2xl font-righteous mb-5">¿Prefieres un trato más directo?</h2>
              Contáctanos por <strong>WhatsApp</strong> y te atenderemos con la misma dedicación y cariño. Con tán solo un clic, podemos endulzar tus momentos especiales.</p>
            </div>
            <div className="grid grid-cols-2 p-12 gap-2">
              <a className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300" href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu">
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
      </ParallaxSection>

      <Footer id="footer" />

    </main>
    
  );
};

export default App;
