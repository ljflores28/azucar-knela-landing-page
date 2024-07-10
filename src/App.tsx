import Delivery from './components/Delivery';
import CarruselCatalogo from './components/template/CarruselCatalogo';
import CarruselResenas from './components/template/CarruselResenas';
import Footer from './components/Footer';
import useScrollPercentage from './hook/useScrollPercentage';
import Hero  from './components/Hero';
import Menu from './components/Menu';
import { BsWhatsapp } from "react-icons/bs";

const App: React.FC = () => {

  useScrollPercentage();

  return (
    <>
      <div id="background" className="fixed bg-cover w-full h-screen -z-10 animate-switchBg" />
      <a id="float" className="relative cursor-pointer w-full  ">
        <BsWhatsapp fill='#ffff' className='bg-[#26D366] fixed z-20 object-cover size-14 sm:size-20 shadow-2xl shadow-slate-700 right-0 bottom-0 p-4 m-8 rounded-2xl sm:p-6 focus:ring-4 shadow-lg transform active:scale-75 transition-transform'/>
      </a>
      <header className="h-[15vh] sm:h-fit">
        <Menu />
      </header>
      <div className="p-7 bg-white mx-auto max-w-[350px] md:max-w-3xl xl:max-w-6xl">
        <Hero />
        <main className='flex flex-col text-center gap-24 sm:m-20'>
              <CarruselCatalogo />
              <CarruselResenas />
              <Delivery />
        </main>
      </div>
      <Footer id={'footer'} />
    </>
  );
};

export default App;
