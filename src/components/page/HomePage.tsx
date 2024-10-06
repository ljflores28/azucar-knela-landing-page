// import BannerCTA from '../BannerCTA';
import BannerCTA from '../BannerCTA';
import Formulario from '../Formulario';
import Hero from '../Hero';
import QuienSomos from '../QuienSomos';
import CarruselCatalogo from '../template/CarruselCatalogo';
import CarruselResenas from '../template/CarruselResenas';
import ContenedorDeMain from '../template/ContenedorDeMain';


const HomePage = () : JSX.Element => {

    return (
        <>
        <Hero id={"Hero"} />
        <ContenedorDeMain>
            <CarruselCatalogo id={"Catalogo"} />
            <BannerCTA id={"BannerCTA"} />
            <CarruselResenas id={"Reseñas"} />
            <QuienSomos id={"QuienSomos"} />
            <Formulario id={"Formulario"} />
        </ContenedorDeMain>
        </>

    )

}

export default HomePage