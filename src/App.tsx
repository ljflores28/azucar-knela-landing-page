import CarruselCatalogo from "./components/template/CarruselCatalogo";
import CarruselResenas from "./components/template/CarruselResenas";
import Footer from "./components/Footer";
import useScrollPercentage from "./hook/useScrollPercentage";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import FAB from "./components/template/FAB";
import BannerCTA from "./components/BannerCTA";
import QuienSomos from "./components/QuienSomos";
import Formulario from "./components/Formulario";

const App: React.FC = () => {
  useScrollPercentage();

  return (
    <>
      <div
        id="Background"
        className="fixed w-full h-screen bg-cover -z-10 animate-switchBg"
      />
      <FAB id={"FAB"} />
      <header className="sticky top-0 z-10 bg-white sm:h-fit">
        <Menu id={"Menu"} />
      </header>
      <div className="mx-auto bg-white p-7 main-container">
        <Hero id={"Hero"} />
        <main className="flex flex-col gap-8 text-center sm:m-20">
          <QuienSomos id={"QuienSomos"} />
          <CarruselCatalogo id={"Catalogo"} />
          <CarruselResenas id={"Reseñas"} />
          <BannerCTA id={"BannerCTA"} />
          <Formulario id={"Formulario"} />
        </main>
      </div>
      <Footer id="Footer" />
    </>
  );
};

export default App;
