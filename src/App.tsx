import Delivery from "./components/Delivery";
import CarruselCatalogo from "./components/template/CarruselCatalogo";
import CarruselResenas from "./components/template/CarruselResenas";
import Footer from "./components/Footer";
import useScrollPercentage from "./hook/useScrollPercentage";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import { useState } from "react";
import { RiEBike2Fill } from "react-icons/ri";


const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollPercentage();

  const botonMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        id="background"
        className="fixed bg-cover w-full h-screen -z-10 animate-switchBg"
      />
      <div className="relative z-20">
        <button
          onClick={botonMenu}
          className="fixed flex justify-center items-center bg-fuchsia-900 hover:bg-[#BAB0EF] text-white font-bold size-14 sm:size-20 shadow-2xl shadow-slate-700 rounded-xl bottom-8 right-8 transform active:scale-75"
        >
          <RiEBike2Fill size={23} />
        </button>
        <div
          className={`flex flex-col gap-2 fixed bottom-24 sm:bottom-32 right-10 sm:right-12
            ${menuOpen ? "" : "hidden"}`
          }
        >
          <button
            className={menuOpen ? 
              'flex justify-center items-center font-bold size-10 sm:size-12 rounded-lg shadow-2xl shadow-slate-700  opacity-100 transform active:scale-75' 
              : 
              'transition-transform transform translate-y-6 opacity-0'}
          >
            <img src="whatsapp-logo.png" alt="" className="rounded-lg object-cover" />
          </button>
          <button
            className={menuOpen ? 
              'flex justify-center items-centerfont-bold size-10 sm:size-12 rounded-lg shadow-2xl shadow-slate-700 transform active:scale-75' 
              : 
              'transition-transform translate-y-14 opacity-0'}
          >
            <img src="Rappi-logo.png" alt="" className="rounded-lg object-cover" />
          </button>
          <button
            className={menuOpen ? 
              'flex justify-center items-center font-bold size-10 sm:size-12 rounded-lg shadow-2xl shadow-slate-700 transform active:scale-75' 
              : 
              'transition-transform translate-y-14 opacity-0'}
          >
            <img src="pedidosya-logo.png" alt="" className="rounded-lg object-cover" />
          </button>
          
        </div>
      </div>
      <header className="h-[15vh] sm:h-fit">
        <Menu />
      </header>
      <div className="p-7 bg-white mx-auto max-w-[350px] md:max-w-3xl xl:max-w-6xl">
        <Hero />
        <main className="flex flex-col text-center gap-24 sm:m-20">
          <CarruselCatalogo />
          <CarruselResenas />
          <Delivery />
        </main>
      </div>
      <Footer id={"footer"} />
    </>
  );
};

export default App;
