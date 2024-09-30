import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { TbGpsFilled } from "react-icons/tb";
import { PiInstagramLogoDuotone, PiWhatsappLogoDuotone, PiFacebookLogoDuotone, PiTiktokLogoDuotone } from "react-icons/pi";
import { Props } from "../types/Interfaces";

const Footer: React.FC<Props> = ({ id }): JSX.Element => {
  return (
    <footer id={id} className="bg-[#B0AEEF] w-full py-10">
      <h2 className="text-xl text-center font-merriweather md:text-2xl xl:text-4xl">
        ¡Comunicate con nosotros!
      </h2>
      <div className="px-[10vw] grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* Contact Information */}
        <div className="p-5">
          <ul className="space-y-2 text-rose-100 font-poppins sm:text-sm xl:text-xl">
            <li>
              <span className="sr-only">Email:</span>
              <MdOutlineAlternateEmail className="inline text-2xl" aria-hidden="true" />
              <a href="mailto:info@azucaryknela.com" className="ml-2">info@azucaryknela.com</a>
            </li>
            <li>
              <span className="sr-only">Teléfono:</span>
              <IoPhonePortrait className="inline text-2xl" aria-hidden="true" />
              <a href="tel:+541167953259" className="ml-2">11-67953259</a>
            </li>
            <li>
              <span className="sr-only">Dirección:</span>
              <TbGpsFilled className="inline text-2xl" aria-hidden="true" />
              <a  href="https://maps.app.goo.gl/hkm1CHvnMks4rH7U7" className="ml-2">Maza 11, CABA</a>
            </li>
          </ul>
          <hr className="my-4 border-t-2 rounded-lg" />
          {/* Social Media Icons */}
          <ul className="flex gap-4 py-3 sm:justify-center">
            <li>
              <a href="https://www.instagram.com/azucaryknela/" aria-label="Instagram">
                <PiInstagramLogoDuotone className="inline text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5491167953259" aria-label="WhatsApp">
                <PiWhatsappLogoDuotone className="inline text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100063820311531&mibextid=ZbWKwL" aria-label="Facebook">
                <PiFacebookLogoDuotone className="inline text-3xl" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@azucaryknela?_t=8qAGhmw6hPR&_r=1" aria-label="TikTok">
                <PiTiktokLogoDuotone className="inline text-3xl" />
              </a>
            </li>
          </ul>
        </div>
        {/* Map */}
        <div className="mb-5 transition duration-200 ease-out hover:scale-105 hover:ease-in hover:rotate-1">
          <iframe
            id="map-canvas"
            title="Ubicación de Azúcar y Knela"
            className="w-auto h-full shadow-lg rounded-xl"
            src="https://maps.google.com/maps?width=450&height=200&hl=es&q=az%C3%BAcar%20y%20knela&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
