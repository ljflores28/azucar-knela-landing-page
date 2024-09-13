import React from "react";
import { RiWhatsappLine } from "react-icons/ri";

const BannerCTA : React.FC = () => {

    return <section className="w-full h-fit bg-[#B0AEEF] py-[75px] px-[45px]">
        <div className="flex flex-wrap items-center h-full gap-3 flex-w justify-evenly">
            <p className="content-center h-full font-semibold font-poppins">¡Tenemos opciones clasicas para vos! <br/> Visitá nuestro catalogo de tortas clasicas</p>
            <button className="flex justify-around gap-4 items-center p-3 sm:p-4 rounded-2xl bg-[#25D366]" onClick={() => alert("hola")}>
                <p className="text-xs text-white font-lsemibold font-poppins sm:text-2xl">Ir al Catalogo</p>
                <RiWhatsappLine fill="#ffff" className="h-auto w-[30px] sm:w-[50px]" />
            </button>
        </div>
    </section>
}

export default BannerCTA;