import React, { useState } from "react";
import { Notification, useToaster } from "rsuite";
import HeaderH2 from "./atomos/HeaderH2";
import FormContent from "./template/FormContent";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Props } from "../types/Interfaces";

const Formulario: React.FC<Props> = ({ id }): JSX.Element => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState<Date | null>(null);
  const [descripcion, setDescripcion] = useState("");
  const toaster = useToaster();

  const showNotification = (type: "success" | "warning", message: string) => {
    toaster.push(
      <Notification
        type={type}
        header={type === "success" ? "Éxito" : "Advertencia"}
      >
        {message}
      </Notification>,
      { placement: "topEnd", duration: 3000 }
    );
  };

  const handleSubmit = () => {
    if (!nombre || !fecha || !descripcion) {
      showNotification("warning", "Por favor, rellena todos los campos.");
      return;
    }

    if (descripcion.length > 200) {
      showNotification(
        "warning",
        "La descripción no debe exceder los 200 caracteres."
      );
      return;
    }

    const mensajeWs =`
👋 Hola, mi nombre es ${nombre},
✨ Necesito,${descripcion}
📆 Para el día, ${fecha.toLocaleDateString()}

🚨⚠️INFORMACIÓN IMPORTANTE⚠️🚨

📸 ${nombre}, No olvides enviarnos fotos de referencia de tu diseño ideal para poder hacer un presupuesto acorde a tus necesidades.
  `;
    // Convierte el mensaje en una URL amigable para WhatsApp
    const encodedMessage = encodeURIComponent(mensajeWs);

    console.log(encodedMessage)
    
    window.location.href = `https://api.whatsapp.com/send?phone=5491167953259&text=${encodedMessage}`

    showNotification("success", "Solicitud enviada correctamente.");
  };

  return (
    <section id={id} aria-labelledby="section-title">
      <HeaderH2>✨ ¿Como pedir tu torta personalizada? ✨</HeaderH2>
      <div className="grid items-center justify-center gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        {/* Descripción */}
        <div>
          <h2
            id="section-title"
            className="text-xl font-normal font-merriweather text-start"
          >
            Para hacer tu idea realidad, necesitamos algo de info:
          </h2>
          <br />
          <ul className="space-y-4 list-disc list-inside text-start">
            <li className="list-none">
              <h3 className="text-lg font-normal font-poppins">
                Nombre:
              </h3>
              <p className="font-light text-left">
                Para conocernos y brindarte una atención personalizada.
              </p>
            </li>

            <li className="list-none">
              <h3 className="text-lg font-normal font-poppins">Fecha de celebración:</h3>
              <p className="font-light text-left">
                Para saber en que día necesitas tu pedido.
              </p>
            </li>

            <li className="list-none">
              <h3 className="text-lg font-normal font-poppins">
                ¡Una idea que nos inspire!💫
              </h3>
              <p className="font-light text-left">
                Para ofrecerte un presupuesto acorde a la decoración y el diseño que deseas.
              </p>
            </li>
          </ul>
        </div>
        {/* Formulario */}
        <div className="rounded-lg p-4 bg-[#88EADA] border-2 border-[#B0AEEF] w-[90%]">
          <FormContent
            setNombre={setNombre}
            setFecha={setFecha}
            setDescripcion={setDescripcion}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Formulario;
