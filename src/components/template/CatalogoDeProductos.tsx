import { useState } from "react";
import Buscador from "../atomos/Buscador"
import HeaderH1 from "../atomos/HeaderH1"
import CatalogoClasico from "../CatalogoClasico"


const CatalogoDeProductos : React.FC = () => {

    const [filtro, setFiltro] = useState("");

    return (
        <>
        <HeaderH1>Catálogo de tortas clásicas</HeaderH1>
        <Buscador handleFilter={setFiltro} />
        <div className="flex flex-wrap items-center justify-center gap-3">
            <CatalogoClasico filtro={filtro}  />
        </div>
        </>
    )

}

export default CatalogoDeProductos;