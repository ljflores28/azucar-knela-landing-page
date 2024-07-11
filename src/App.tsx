import Delivery from "./components/Delivery";
import CarruselCatalogo from "./components/template/CarruselCatalogo";
import CarruselResenas from "./components/template/CarruselResenas";
import Footer from "./components/Footer";
import useScrollPercentage from "./hook/useScrollPercentage";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import { RiEBike2Fill } from "react-icons/ri";
import useFocus from "./hook/useFocus";


const App: React.FC = () => {
  const [buttonRef, isFocused] = useFocus<HTMLButtonElement>();
  useScrollPercentage();


  return (
    <>
      <div
        id="background"
        className="fixed bg-cover w-full h-screen -z-10 animate-switchBg"
      />
      <div className="relative z-20">
        <button
          ref={buttonRef}
          className="fixed flex justify-center items-center bg-fuchsia-900 active:bg-[#BAB0EF] focus:ringfont-bold size-16 sm:size-20 shadow-xl shadow-slate-700 rounded-xl bottom-8 right-8 transform active:scale-75"
        >
          <RiEBike2Fill fill="#ffff" size={23} />
        </button>
        {(
        <div
        className={`flex flex-col gap-2 fixed bottom-28 sm:bottom-32 right-10 sm:right-11`}
      >
        <button onClick={() => window.location.href="https://wa.me/c/5491167953259"}
          className={'flex justify-center items-center font-bold size-12 sm:size-14 rounded-lg shadow-2xl shadow-slate-700  opacity-100 transform active:scale-75 animate-slide-in'}
          style={ isFocused ? { animation: 'slide-in 0.3s forwards' } : { animation: 'slide-out 0.3s forwards' }}
        >
          <img src="whatsapp-logo.png" alt="" className="rounded-lg object-cover" />
        </button>
        <button
          onClick={() => window.location.href="https://www.rappi.com.ar/restaurantes/214908-azucar-y-knela"}
          className={'flex justify-center items-centerfont-bold size-12 sm:size-14 rounded-lg shadow-2xl shadow-slate-700 transform active:scale-75 animate-slide-in'}
          style={ isFocused ? { animation: 'slide-in 0.3s forwards' } : { animation: 'slide-out 0.3s forwards' }}
        >
          <img src="Rappi-logo.png" alt="" className="rounded-lg object-cover" />
        </button>
        <button
          onClick={() => window.location.href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/azucar-y-knela-menu"}
          className={'flex justify-center items-center font-bold size-12 sm:size-14 rounded-lg shadow-2xl shadow-slate-700 transform active:scale-75 animate-slide-in'}
          style={ isFocused ? { animation: 'slide-in 0.3s forwards' } : { animation: 'slide-out 0.3s forwards' }}
        >
          <img src="pedidosya-logo.png" alt="" className="rounded-lg object-cover" />
        </button>
        
      </div>

        )
        
        }

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
