
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
      id: "5863430510395501",
      titulo: "Torta clásicas.",
      descripcion:
        "Cinco opciones clásicas de tortas para tu elección.",
      urlImagen: "/images/pasteles/torta-pie-de-limon.webp",
    },
    {
      id: "8229880847134919",
      titulo: "Brookie.",
      descripcion:
        "Deliciosa torta de bizcocho de chocolate, relleno de chocolate y frutillas (fresas), además cubierto de chocolate con topping de frutillas.",
      urlImagen: "public/images/pasteles/torta-pie-de-limon.webp"
    },
    {
      id: "5863430510395501",
      titulo: "Torta Choco-frutillas.",
      descripcion:
        "Deliciosa torta de bizcocho de chocolate, relleno de chocolate y frutillas (fresas), además cubierto de chocolate con topping de frutillas bañadas es chocolate.",
      urlImagen: "public/images/pasteles/torta-pie-de-limon.webp"
    },
    {
      id: "5863430510395501",
      titulo: "Cheesecake.",
      descripcion:
        "Deliciosa torta de cheescake en tres sabores. Oreo y dulce de leche, Maracuyá, Frutos rojos.",
      urlImagen: "public/images/pasteles/torta-pie-de-limon.webp"
    },
    {
      id: "5863430510395501",
      titulo: "Torta de Profiteroles.",
      descripcion:
          "Deliciosa torta de profiteroles en dos tamaños. Torre de 20 o  30 unidades.",
      urlImagen: "public/images/pasteles/torta-pie-de-limon.webp"
      },
      {
        id: "5863430510395501",
        titulo: "Biscocho desnudo.",
        descripcion:
          "Deliciosa torta al natural con decoración de chocolate.",
        urlImagen: "public/images/pasteles/torta-pie-de-limon.webp",
      },
      {
        id: "5863430510395501",
        titulo: "Quesitorta.",
        descripcion:
          "Deliciosa torta de bizcocho coronado con flan casero (quesillo).",
        urlImagen: "public/images/pasteles/torta-pie-de-limon.webp"
      },
  ]
    .filter((p) => p.titulo.toUpperCase().includes(filtro))
    .map((producto) => {
      return (
        <TarjetaDeProducto
          id={producto.id}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          textoBotonCta={textoDeBotonCta}
          tipoTarjeta={tipoTarjeta}
          urlImagen={producto.urlImagen} />
      );
    });

  return (
    <>{listaProductos}</>
  );
};

export default CatalogoClasico;
