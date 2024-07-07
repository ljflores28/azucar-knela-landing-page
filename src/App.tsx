import Delivery from './components/Delivery';
import CarruselCatalogo from './components/template/CarruselCatalogo';
import CarruselResenas from './components/template/CarruselResenas';
import Footer from './components/Footer';
import useScrollPercentage from './hook/useScrollPercentage';
const App: React.FC = () => {
  //const visibleSection = useScrollSection('.parallax-section');
  useScrollPercentage();

  return (
    <>
      <div className=" fixed bg-cover w-full h-screen -z-10 animate-switchBg" />
      <header className="xs:h-[15vh] sm:h-fit">
        <div className= 'bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  z-10 fixed sm:shadow sm:relative flex flex-col justify-center items-center sm:flex-row sm:justify-around '>
          <img src="Logo-rosa.png" alt="" className="w-[35%] md:w-1/3 lg:w-1/5 bg-white" />
          <nav className="font-sourceSans flex items-center gap-5 mb-5">
            <a href="#catalogo" className=" p-1 hover:text-violet-300">catalogo</a>
            <a href="#reseñas" className=" p-1 hover:text-violet-300">reseñas</a>
            <a href="#delivery" className=" p-1 hover:text-violet-300">delivery</a>
            <a href="#footer" className=" p-1 hover:text-violet-300">contacto</a>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-[350px] md:max-w-3xl xl:max-w-6xl h-full p-7 bg-white">
        <section className="grid sm:grid-cols-1 md:grid-cols-2">
          {/*MENSAJE*/}
          <div className="flex flex-col justify-center self-center mx-3 gap-4">
            <h1 className="font-righteous xs:mt-5 sm:mt-0 text-3xl leading-[3.0rem] md:text-4xl md:leading-[4.0rem] xl:text-6xl xl:leading-[5.0rem]">
              Los pasteles más <br /> deliciosos de <span className="inline-block -rotate-12 text-violet-700">BA!</span>
            </h1>
            <p className="font-sourceSans font-light sm:text-xs md:text-sm xl:text-xl">
              Pasteleria y postres personalizados. <br /> ¡Haz que tus momentos
              se vuelvan <br /> dulces con nosotros!
            </p>
            <div className=" text-white font-sourceSans xl:text-xl">
              <button className=" bg-rose-400 w-full sm:w-fit py-2 px-10 rounded-3xl hover:scale-110 duration-200 hover:bg-[#23EBD9] focus:ring-4 focus:outline-none focus:ring-[#FFB1D6] transition ease-in-out delay-150 hover:-translate-y-1">
                ¡Ordena Ahora!
              </button>
            </div>
          </div>
          {/*IMAGEN*/}
          <div className="relative mt-4 sm:mt-0 flex self-center md:col-span-1 xl:col-span-1">
            <img
              src="cake-hero.png"
              alt="_blank"
              className="absolute"
            />
            <img
              src="blob.svg"
              alt="_blank"
              className=""
            />
          </div>
        </section>
        {/*MAIN*/}
        <main>
          <div className="flex flex-col text-center gap-10 sm:p-6 md:p-12 xl:gap-10 xl:p-12">
              <CarruselCatalogo />
              <CarruselResenas />
              <Delivery />
          </div>
        </main>
      </div>
      <Footer id={'footer'} />
    </>
  );
};

export default App;
