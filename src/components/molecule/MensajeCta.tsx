import { Button } from "rsuite";
import { FaWhatsapp } from "react-icons/fa";

const MensajeCta : React.FC = () => {

    return <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-sm font-poppins">¿Buscas algo más? 
                    <span className="block">Escribenos al WhatsApp</span></h2>
                <Button appearance="primary" href="https://api.whatsapp.com/send?phone=5491167953259&text=🖐️ Hola! Quisiera hacerles una consulta." color="green" endIcon={<FaWhatsapp />} className="w-fit" >
                    Mensaje
                </Button>
            </div>
}

export default MensajeCta;