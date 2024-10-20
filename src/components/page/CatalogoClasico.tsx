import { Button, Panel } from "rsuite";
import ContenedorDeMain from "../template/ContenedorDeMain"
import HeaderH1 from '../atomos/HeaderH1';
import { SiWhatsapp } from "react-icons/si";

const CatalogoClasico = () => {

    return (
        <ContenedorDeMain >
            <HeaderH1>Catálogo de tortas clásicas</HeaderH1>
            <div className="flex flex-wrap items-center justify-center gap-14">
                <Panel shaded bordered bodyFill className="flex w-[240px]">
                    <img srcSet="https://res.cloudinary.com/dag6qwyd7/image/fetch/f_auto,q_auto,w_240,h_180,c_lfill/https://azucaryknela.com/cld-assets/images/pastel-4.webp" className="object-contain " />
                    <Panel header="RSUITE" className="text-start">
                        <p>
                            <small>
                            A suite of React components, sensible UI design, and a friendly development experience.
                            </small>
                        </p>
                        <Button href="https://wa.me/p/5863430510395501/5491167953259" className="mt-4 " color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                            Ordenar por WhatsApp
                        </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill className="inline-block  w-[240px]">
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                    <img src="https://via.placeholder.com/240x180" height="180" />
                    <Panel header="RSUITE">
                    <p>
                        <small>
                        A suite of React components, sensible UI design, and a friendly development experience.
                        </small>
                    </p>
                    <Button color="green" appearance="primary" endIcon={<SiWhatsapp />}>
                         Ordenar por WhatsApp
                    </Button>
                    </Panel>
                </Panel>
                
            </div>
        </ContenedorDeMain>

    );

};

export default CatalogoClasico;