
import { TarjetaDeProducto } from "./molecule/TarjetaDeproducto";
import { useEffect, useState } from "react";
import { isMobile } from "../utils/Utils";

type TipoTarjeta =
  | "vertical"
  | "horizontal"
  | "vertical-cta"
  | "horizontal-cta";

const CatalogoClasico : React.FC<{filtro : string}> = ({filtro}) => {
  const [tipoTarjeta, setTipoTarjeta] = useState("vertical-cta" as TipoTarjeta);

  useEffect(() => {
    isMobile() && setTipoTarjeta("horizontal-cta");
  }, []);

  const textoDeBotonCta = ["vertical", "vertical-cta"].includes(tipoTarjeta)
    ? "Pedir pow WhatsApp"
    : "";

  const listaProductos = [
    {
      titulo: "Torta tres leches",
      descripcion:
        "Deliciosa torta humedecida en tres tipos de leches, evapodara, condensada y natural",
      urlRedireccion: "https://wa.me/p/5863430510395501/5491167953259",
      urlImagen: "/src/assets/Images/WhatsApp Image 2024-10-28 at 20.02.59.webp",
      textoBotonCta: "",
    },
    {
      titulo: "Torta dos leches",
      descripcion:
        "Deliciosa torta humedecida en tres tipos de leches, evapodara, condensada y natural",
      urlRedireccion: "https://azucaryknela.com",
      urlImagen: "src/assets/Images/WhatsApp Image 2024-10-28 at 20.02.54.webp",
      textoBotonCta: "",
    },
    {
      titulo: "Tiramisu",
      descripcion:
        "Deliciosa torta humedecida en tres tipos de leches, evapodara, condensada y natural",
      urlRedireccion: "https://azucaryknela.com",
      urlImagen: "src/assets/Images/WhatsApp%20Image%202024-10-28%20at%2020.02.55%20(2).webp",
      textoBotonCta: "",
    },
    {
      titulo: "Torta tres leches",
      descripcion:
        "Deliciosa torta humedecida en tres tipos de leches, evapodara, condensada y natural",
      urlRedireccion: "https://azucaryknela.com",
      urlImagen: "src/assets/Images/WhatsApp Image 2024-10-28 at 20.02.59 (3).webp",
      textoBotonCta: "",
    },
    {
        titulo: "Torta tres leches",
        descripcion:
          "Deliciosa torta humedecida en tres tipos de leches, evapodara, condensada y natural",
        urlRedireccion: "https://azucaryknela.com",
        urlImagen: "src/assets/Images/WhatsApp Image 2024-10-28 at 20.02.58 (3).webp",
        textoBotonCta: "",
      },
      {
        titulo: "Torta tres leches",
        descripcion:
          "Deliciosa torta humedecida en tres tipos de leches, evapodara, condensada y natural",
        urlRedireccion: "https://azucaryknela.com",
        urlImagen: "src/assets/Images/WhatsApp Image 2024-10-28 at 20.02.56 (3).webp",
        textoBotonCta: "",
      },
      {
        titulo: "Torta tres leches",
        descripcion:
          "Deliciosa torta humedecida en tres tipos de leches, evapodara, condensada y natural",
        urlRedireccion: "https://azucaryknela.com",
        urlImagen: "src/assets/Images/WhatsApp Image 2024-10-28 at 20.02.58.webp",
        textoBotonCta: "",
      },
  ]
    .filter((p) => p.titulo.toUpperCase().includes(filtro))
    .map((producto) => {
      return (
        <TarjetaDeProducto
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          textoBotonCta={textoDeBotonCta}
          tipoTarjeta={tipoTarjeta}
          urlRedireccion={producto.urlRedireccion} 
          urlImagen={producto.urlImagen}        />
      );
    });

  return (
    <>{listaProductos}</>
  );
};

export default CatalogoClasico;
