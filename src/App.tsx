import Footer from "./components/Footer";
import useScrollPercentage from "./hook/useScrollPercentage";
import Menu from "./components/Menu";
import BotonFlotante from "./components/template/BotonFlotante";
import HomePage from "./components/page/HomePage";
import { Route, Routes } from "react-router-dom";
import CatalogoClasico from "./components/page/CatalogoClasico";


const App: React.FC = () => {
  useScrollPercentage();

  return (
    <>
      <div
        id="Background"
        className="fixed w-full h-screen bg-cover -z-10 animate-switchBg"
      />
      <BotonFlotante id={"FAB"} />
      <header className="sticky top-0 z-10 bg-white sm:h-fit">
        <Menu id={"Menu"} />
      </header>
      <div className="relative mx-auto overflow-hidden bg-white p-7 main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tortas-clasicas" element={<CatalogoClasico />} />
        </Routes>
      </div>
      <Footer id="Footer" />
    </>
  );
};

export default App;
