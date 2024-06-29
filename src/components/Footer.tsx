import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { TbGpsFilled } from "react-icons/tb";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { PiTiktokLogoDuotone } from "react-icons/pi";

interface Props {
  id: string;
}

const Footer: React.FC<Props> = ({ id }): JSX.Element => {
  return (
    <footer id={id} className="bg-[#B0AEEF] w-full">
      <h1 className="font-righteous text-4xl text-center pt-10">
        Contactanos en cualquier momento
      </h1>
      <div className="px-[10vw] grid grid-cols-2 items-center justify-items-center">
        <div className="p-5">
          <ul className="space-y-1 text-rose-100 font-sourceSans text-xl ">
            <li>
              <span>
                <MdOutlineAlternateEmail className="inline text-2xl" />
              </span>{" "}
              info@azucar-knela.com
            </li>
            <li>
              {" "}
              <span>
                <IoPhonePortrait className=" inline text-2xl" />
              </span>{" "}
              11-67953259
            </li>
            <li>
              {" "}
              <span>
                <TbGpsFilled className="inline text-2xl" />
              </span>{" "}
              Maza 11, C1206 Cdad. Autónoma de Buenos Aires
            </li>
          </ul>
          <span className=" text-xl">
            --------------------------------------------
          </span>
          <ul className="flex gap-3">
            <li>
              <a href="https://www.instagram.com/azucaryknela/">
                <PiInstagramLogoDuotone className=" inline text-3xl" />
              </a>
            </li>
            <li>
              <a href="">
                <PiWhatsappLogoDuotone className=" inline text-3xl" />
              </a>
            </li>
            <li>
              <a href="">
                <PiFacebookLogoDuotone className=" inline text-3xl" />
              </a>
            </li>
            <li>
              <a href="">
                <PiTiktokLogoDuotone className=" inline text-3xl" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center p-12 transition duration-200 ease-out hover:scale-105 hover:ease-in hover:rotate-1">
            <iframe
              id="map-canvas"
              className="map_part rounded-xl shadow-lg"
              width="600"
              height="300"
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=az\xFAcar y knela&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            >
            </iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
