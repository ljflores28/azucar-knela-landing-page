import MensajeCta from "../molecule/MensajeCta";
import CatalogoDeProductos from "../template/CatalogoDeProductos";
import ContenedorDeMain from "../template/ContenedorDeMain";


const CatalogoPage : React.FC = () => {
    
    return (
        <ContenedorDeMain >
            <CatalogoDeProductos />
            <MensajeCta />
        </ContenedorDeMain>    
    )
}

export default CatalogoPage;