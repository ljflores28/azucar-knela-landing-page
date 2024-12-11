
import ContenedorDeMain from "../template/ContenedorDeMain";
import { Button } from 'rsuite';
import MensajeCta from "../molecule/MensajeCta";

type buttonType ={
    href: string,
    text: string
}

const buttonsLinktree : buttonType[] = [
    {
      "href": "/",
      "text": "¡Visita nuestra página web!."
    },
    {
      "href": "https://www.instagram.com/p/CwYgLshuzKI/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
      "text": "¿Cómo realizar tu pedido?."
    },
    {
      "href": "/catalogo-tortas-clasicas",
      "text": "Catálogo de tortas clásicas."
    },
    {
      "href": "https://api.whatsapp.com/send?phone=5491167953259&text=🖐️ Hola! Quisiera hacerles una consulta.",
      "text": "Consultas y pedidos personalizados."
    },
    {
      "href": "https://mpago.li/1dhfyMb",
      "text": "Visitanos en Pedidos Ya."
    },
    {
      "href": "https://www.rappi.com.ar/restaurantes/214908-azucar-y-knela",
      "text": "Visitanos en Rappi."
    },
    {
      "href": "http://mpago.li/2Sn1Myp",
      "text": "Visitanos en Mercado Pago delivery."
    }
  ]


const LinkTreePage : React.FC = () => {
    return (
    <ContenedorDeMain>
        <div className="flex flex-col items-center self-center gap-3">
            <img src="images/Logo-circular-violeta.png" alt="Logo circular de azucar & canela" className="w-1/3"  />
            <h1 className="text-sm font-merriweather">
                🍰 Pastelería take away / tortas personalizadas 🍰 
                <strong className="block "> Consultas por WhatsApp de Lu a Vie de 10 a 19hs y Sáb de 10 a 18hs</strong>
                <strong className="block">Maza 11, Almagro, CABA. </strong>
            </h1>
            <h2 className="text-sm font-poppins">Sabor, arte y dulzura</h2>
            <div className="flex flex-col items-center gap-4">
                {buttonsLinktree.map(button => (
                   <Button appearance="ghost" size="lg" href={button.href}  color="violet" className="w-full bg-purple-300 md:w-fit "  >
                   {button.text}
               </Button> 
                ))}
            </div>
        </div>
        <MensajeCta />
    </ContenedorDeMain>)
}

export default LinkTreePage;