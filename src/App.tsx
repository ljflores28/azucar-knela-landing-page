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
        className="fixed w-full h-screen bg-cover -z-10 animate-switchBg"
      />
      <FAB />
      <header className="sticky top-0 z-10 sm:h-fit">
        <Menu />
      </header>
      <div className="p-7 bg-white mx-auto max-w-[95%]">
        <Hero />
        <main className="flex flex-col gap-8 text-center sm:m-20">
          <CarruselCatalogo />
          <CarruselResenas />
        </main>
      </div>
      <Footer id={"footer"} />
    </>
  );
};

export default App;
