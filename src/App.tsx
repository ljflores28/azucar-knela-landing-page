import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Divider } from "./components/Divider";
import CarruselCatalogo from "./components/template/CarruselCatalogo";
import CarruselResenas from "./components/template/CarruselResenas";
import ParallaxSection from "./components/template/ParallaxSection";
import useScrollSection from "./hook/useScrollTrasicion";
import Footer from "./components/Footer";
import Delivery from "./components/Delivery";


const App: React.FC = () => {

  const visibleSection = useScrollSection('.parallax-section');
  
  return (
    <main className="">
      <ParallaxSection
        id="header"
        backgroundImage="bg-rosa.jpg"
        nextBackgroundImage="bg-turquesa.jpg"
        isVisible={visibleSection === 0}
      >
        <Header />
        <Hero />
      </ParallaxSection>

      <ParallaxSection
        id="section2"
        backgroundImage="bg-turquesa.jpg"
        nextBackgroundImage="bg-rosa.jpg"
        prevBackgroundImage="bg-turquesa.jpg"
        isVisible={visibleSection === 1}
      >
        <Divider id="section2-1" fill="#FFB1D6" />
        <CarruselCatalogo />
      </ParallaxSection>

      <ParallaxSection
        id="section3"
        backgroundImage="bg-violeta.jpg"
        nextBackgroundImage="bg-turquesa.jpg"
        isVisible={visibleSection === 2}
      >
        <Divider  id="section3-1"  fill="#88EADA" />
        <CarruselResenas />
      </ParallaxSection>

      <ParallaxSection
        id="section4"
        backgroundImage="bg-rosa.jpg"
        nextBackgroundImage="bg-violeta.jpg"
        isVisible={visibleSection === 3}
      >
        <Divider  id="section4-1"  fill="#B0AEEF" />
        <Delivery />
      </ParallaxSection>

      <Footer id="footer" />

    </main>
    
  );
};

export default App;
