import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Divider } from "./components/Divider";
import CarruselCatalogo from "./components/template/CarruselCatalogo";
import CarruselResenas from "./components/template/CarruselResenas";
import ParallaxSection from "./components/template/ParallaxSection";
import useScrollSection from "./hook/useScrollTrasicion";

const App: React.FC = () => {

  const visibleSection = useScrollSection('.parallax-section');
  
  return (
    <main className="">
      <ParallaxSection
        id="section1"
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
        <Divider fill="#FFB1D6" />
        <CarruselCatalogo />
      </ParallaxSection>

      <ParallaxSection
        id="section3"
        backgroundImage="/public/bg-violeta.jpg"
        nextBackgroundImage="/public/bg-turquesa.jpg"
        isVisible={visibleSection === 2}
      >
        <Divider fill="#88EADA" />
        <CarruselResenas />
      </ParallaxSection>

      <ParallaxSection
        id="section4"
        backgroundImage="/public/bg-rosa.jpg"
        nextBackgroundImage="/public/bg-violeta.jpg"
        isVisible={visibleSection === 3}
      >
        <Divider fill="#B0AEEF" />
        <section className="bg-white flex flex-col gap-10 text-center p-12">
          CTA
        </section>
      </ParallaxSection>

    </main>
  );
};

export default App;
