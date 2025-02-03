
import { TarjetaDeProducto } from "./molecule/TarjetaDeproducto";
import { useEffect, useState } from "react";
import { isMobile } from "../utils/Utils";
import useGoogleSheetData from "../hook/useGoogleSheetData";
import { Loader } from "rsuite";

type TipoTarjeta =
  | "vertical"
  | "horizontal"
  | "vertical-cta"
  | "horizontal-cta";

const CatalogoClasico : React.FC<{filtro : string}> = ({filtro}) => {
  const [tipoTarjeta, setTipoTarjeta] = useState("vertical-cta" as TipoTarjeta);

  const { data, loading } = useGoogleSheetData("1iQx07xo5UTPZx2KUpIV7JnWeg-Ms5trDmWtSaPlp31o", "Catalogo", "AIzaSyDiYNWUQEHMECwB6VPDNGA-qXX_ihpkHpc");

  useEffect(() => {
    isMobile() && setTipoTarjeta("horizontal-cta");
  }, []);

  const textoDeBotonCta = ["vertical", "vertical-cta"].includes(tipoTarjeta)
    ? "Pedir por WhatsApp"
    : "";
  

  const listaProductos = data.filter((p) => p.titulo.toUpperCase().includes(filtro))
    .map((producto) => {
      return (
        <TarjetaDeProducto
          id={producto.id}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          textoBotonCta={textoDeBotonCta}
          tipoTarjeta={tipoTarjeta}
          urlImagen={producto.pathImg} />
      );
    });

  return (
    <>{ loading ? <Loader className="min-h-dvh" color="pink" size="md" content="Medium" /> : listaProductos }</>
  );
};

export default CatalogoClasico;
