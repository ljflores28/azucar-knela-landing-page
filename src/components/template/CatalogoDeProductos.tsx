import { useState } from "react";
import Buscador from "../atomos/Buscador"
import HeaderH1 from "../atomos/HeaderH1"
import CatalogoClasico from "../CatalogoClasico"

type BannerPromocional = {
    img: string,
    alt: string,
    link: string
}

const bannersPromocionales : BannerPromocional[] = 
    [
        // {
        //     img:"/images/baners/ejemplo-banner-boda.png",
        //     alt: "Banner promocional 1",
        //     link: "https://api.whatsapp.com/send?phone=5491167953259&text=🖐️ Hola! Quisiera saber más sobre las tortas de bodas."
        // },
        // {
        //     img:"/images/baners/ejemplo-banner-boda.png",
        //     alt: "Banner promocional 1",
        //     link: "https://api.whatsapp.com/send?phone=5491167953259&text=🖐️ Hola! Quisiera saber más sobre las tortas de bodas."
        // },
    ]

const CatalogoDeProductos : React.FC = () => {

    const [filtro, setFiltro] = useState("");

    return (
        <div className="flex flex-col gap-4 fade">
            <HeaderH1>Catálogo de tortas clásicas</HeaderH1>
                <div className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory carrusel-catalogo">
                {    bannersPromocionales.map((banner, index) => {
                      return  (
                        <div key={index} className="snap-center shrink-0 w-[320px]">
                            <a href={banner.link} target="_blank" rel="noopener noreferrer" className="">
                                <img src={banner.img} alt={banner.alt} className="object-fill rounded-lg" />
                            </a>
                        </div>
                        )
                    })
                }  
                </div>
            <Buscador handleFilter={setFiltro} />
            <div className="flex flex-wrap items-center justify-center gap-3">
                <CatalogoClasico filtro={filtro}  />
            </div>
        </div>
    )

}

export default CatalogoDeProductos;