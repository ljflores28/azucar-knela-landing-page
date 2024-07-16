import CarruselCatalogo from "./components/template/CarruselCatalogo";
import CarruselResenas from "./components/template/CarruselResenas";
import Footer from "./components/Footer";
import useScrollPercentage from "./hook/useScrollPercentage";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import FAB from "./components/template/FAB";


const App: React.FC = () => {

  useScrollPercentage();


  return (
    <>
      <div
        id="background"
        className="fixed bg-cover w-full h-screen -z-10 animate-switchBg"
      />
      <FAB />
      <header className="h-[15vh] sm:h-fit">
        <Menu />
      </header>
      <div className="p-7 bg-white mx-auto max-w-[350px] md:max-w-3xl xl:max-w-6xl">
        <Hero />
        <main className="flex flex-col text-center gap-24 sm:m-20">
          <CarruselCatalogo />
          <CarruselResenas />
        </main>
      </div>
      <Footer id={"footer"} />
    </>
  );
};

export default App;
