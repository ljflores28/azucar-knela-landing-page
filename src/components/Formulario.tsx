import React, { useState } from "react";
import { Notification, useToaster } from "rsuite";
import HeaderH2 from "./atomos/HeaderH2";
import FormContent from "./template/FormContent";
import "rsuite/dist/rsuite-no-reset.min.css";

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState<Date | null>(null);
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
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

    const mensajeWs = `Soy ${nombre}, necesito en la fecha ${fecha.toLocaleDateString()} un pastel con estas características: ${descripcion}`


    window.location.href = 'https://wa.me/5491128852558?text='.concat(mensajeWs);
    setMensaje(
      `Soy ${nombre}, necesito en la fecha ${fecha.toLocaleDateString()} un pastel con estas características: ${descripcion}`
    );

    
    showNotification("success", "Solicitud enviada correctamente.");
  };

  return (
    <section id="QuienSomos" aria-labelledby="section-title">
      <HeaderH2>¡Pedí tu torta personalizada!</HeaderH2>
      <div className="grid items-center justify-center gap-4 justify-items-center sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        {/* Formulario */}
        <div className="rounded-lg p-4 bg-[#88EADA] border-2 border-[#B0AEEF] w-[90%]">
          <FormContent
            setNombre={setNombre}
            setFecha={setFecha}
            setDescripcion={setDescripcion}
            handleSubmit={handleSubmit}
          />
          {mensaje && <p className="mt-4 text-lg font-bold">{mensaje}</p>}
        </div>

        {/* Descripción */}
        <div>
          <h2
            id="section-title"
            className="text-xl font-normal font-merriweather text-start"
          >
            ¡Dinos! ¿Qué tenés en mente?
          </h2>
          <br />
          <ul className="space-y-4 list-disc list-inside text-start">
            <li className="list-none">
              <h3 className="text-lg font-normal font-poppins">¿Fecha de la celebración?</h3>
              <p className="font-light text-left">
                Indícanos la fecha en que necesitas tu pedido.
              </p>
            </li>

            <li className="list-none">
              <h3 className="text-lg font-normal font-poppins">¿Quién eres?</h3>
              <p className="font-light text-left">
                Danos tu nombre para una atención más personalizada.
              </p>
            </li>

            <li className="list-none">
              <h3 className="text-lg font-normal font-poppins">¡Nos inspiramos en tus ideas!</h3>
              <p className="font-light text-left">
                Escríbenos tus ideas o envíanos una foto de referencia.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
