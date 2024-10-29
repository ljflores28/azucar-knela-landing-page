/* eslint-disable @typescript-eslint/no-unused-vars */
import { SiWhatsapp } from "react-icons/si";
import { Button, IconButton } from "rsuite";

interface TarjetaProducto {
    descripcion: string;
    titulo: string;
    tipoTarjeta: "vertical" | "horizontal" | "vertical-cta" | "horizontal-cta";
    urlRedireccion: string;
    urlImagen: string;
    textoBotonCta?: string;
}

export const TarjetaDeProducto = ({
    descripcion,
    titulo,
    urlRedireccion,
    urlImagen,
    tipoTarjeta,
    textoBotonCta
}: TarjetaProducto): JSX.Element => {
    return (
        <div
            className={`border border-solid border-violet-200 flex bg-white relative ${["vertical-cta", "vertical"].includes(tipoTarjeta) ? "w-[222px]" : "w-full"} ${["vertical-cta", "vertical"].includes(tipoTarjeta) ? "flex-col" : ""} ${tipoTarjeta === "vertical" ? "items-start" : "items-center"} ${["vertical-cta", "vertical"].includes(tipoTarjeta) ? "gap-2" : "gap-[5.24px]"} ${["vertical-cta", "vertical"].includes(tipoTarjeta) ? "shadow-[0px_4px_4px_#00000040]" : "shadow-[0px_2.62px_2.62px_#00000040]"} ${tipoTarjeta === "horizontal" ? "px-[3.93px] py-[6.55px]" : (tipoTarjeta === "horizontal-cta") ? "pl-[3.93px] pr-2.5 py-[6.55px]" : "px-1.5 py-2.5"} ${["vertical-cta", "vertical"].includes(tipoTarjeta) ? "rounded" : "rounded-[2.62px]"} ${["vertical-cta", "vertical"].includes(tipoTarjeta) ? "justify-center" : ""} hover:scale-105 transition delay-150 duration-300 ease-in-out`}
        >
            <img
                className={`object-cover relative ${["vertical-cta", "vertical"].includes(tipoTarjeta) ? "w-52" : "w-20"}`}
                alt={titulo}
                src={urlImagen}
            />
            
            {/* Cuerpo tarjeta horizontal y vertical */}
            {["horizontal", "vertical"].includes(tipoTarjeta) && (
                <div
                    className={`flex flex-col select-none items-start relative text-start ${tipoTarjeta === "vertical" ? "w-full" : ""} ${tipoTarjeta === "vertical" ? "self-stretch" : ""} ${tipoTarjeta === "horizontal" ? "grow" : ""} ${tipoTarjeta === "vertical" ? "gap-[5px]" : "gap-[3.27px]"} ${tipoTarjeta === "vertical" ? "flex-[0_0_auto]" : "flex-1"} ${tipoTarjeta === "vertical" ? "justify-center" : "justify-end"}`}
                >
                    <h2
                        className={`[font-family:'Merriweather-Bold',Helvetica] select-none self-stretch tracking-[0] text-[#594f59] font-bold leading-[normal] relative ${tipoTarjeta === "vertical" ? "mt-[-1.00px]" : "mt-[-0.65px]"} ${tipoTarjeta === "vertical" ? "text-[13px]" : "text-[12px]"}`}
                    >
                        {titulo}
                    </h2>

                    <div
                        className={`[font-family:'Poppins-Regular',Helvetica] select-none self-stretch tracking-[0] text-[#594f59] font-normal leading-[normal] relative ${tipoTarjeta === "vertical" ? "text-[10px]" : "text-[6.5px]"}`}
                    >
                        <p>{descripcion}</p>
                    </div>
                </div>
            )}
            
            {/* Cuerpo tarjeta horizontal y vertical con CTA */}
            {["horizontal-cta", "vertical-cta"].includes(tipoTarjeta) && (
                <>
                    <div className="relative flex flex-col items-start justify-start flex-1 gap-1 text-start grow">
                        <h2 className="relative select-none self-stretch mt-[-0.65px] [font-family:'Merriweather-Bold',Helvetica] font-bold text-[#594f59] text-[16px] tracking-[0] leading-[normal]">
                            {titulo}
                        </h2>

                        <p
                            className={`relative select-none self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-[#594f59] text-[12px] tracking-[0] leading-[normal]`}
                        >
                            {descripcion}
                        </p>
                    </div>
                    
                    {tipoTarjeta === "horizontal-cta" ? 
                        <IconButton href={urlRedireccion} color="green" appearance="primary" icon={<SiWhatsapp color="white" />} /> 
                        : 
                        <Button href={urlRedireccion} appearance="primary" color="green" endIcon={<SiWhatsapp color="white" />} >
                            {textoBotonCta}
                        </Button>}
                </>
            )}
        </div>
    );
};
