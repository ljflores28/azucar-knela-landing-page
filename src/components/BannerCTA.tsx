import React from "react";
import { RiWhatsappLine } from "react-icons/ri";

const BannerCTA : React.FC = () => {

    return <section className="w-full h-[236px] bg-red-200 py-[75px] px-[45px]">
        <div className="flex items-center h-full justify-evenly">
            <p className="content-center h-full font-semibold font-poppins">¡Tenemos opciones clasicas para vos! <br/> Visitá nuestro catalogo de tortas clasicas</p>
            <button className="flex justify-around items-center px-4 min-w-[374px] h-full rounded-2xl bg-[#25D366]" onClick={() => alert("hola")}>
                <p className="text-2xl text-white font-lsemibold font-poppins">Ordenar ahora</p>
                <RiWhatsappLine fill="#ffff" size={62} />
            </button>
        </div>
    </section>
}

export default BannerCTA;