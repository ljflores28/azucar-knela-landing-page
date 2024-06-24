/* eslint-disable react-refresh/only-export-components */
import { SplideSlide } from "@splidejs/react-splide";
import { FaStar, FaRegStar } from "react-icons/fa";
import CarruselWrapper from "../hoc/CarruselWrapper";

const Resenas: React.FC = () => {
  const reviews = (
    <>
    <SplideSlide>
      <div className=" bg-slate-200 flex flex-col items-center w-[270px] h-[381px] shadow-lg rounded-lg p-10 gap-2">
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          className=" rounded-full object-cover w-28"
        />
        <div className="flex gap-1 text-lg">
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaRegStar />
          <FaRegStar />
        </div>
        <h1 className=" text-xl font-righteous font-semibold">
          Leopoldo Flores
        </h1>
        <p className=" text-normal font-sourceSans font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <img src="google-logo.png" alt="" className=" w-10 mt-auto" />
      </div>
    </SplideSlide>
    <SplideSlide>
      <div className=" bg-slate-200 flex flex-col items-center w-[270px] h-[381px]  shadow-lg rounded-lg p-10 gap-2">
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          className=" rounded-full object-cover w-28"
        />
        <div className="flex gap-1 text-lg">
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaRegStar />
          <FaRegStar />
        </div>
        <h1 className=" text-xl font-righteous font-semibold">
          Leopoldo Flores
        </h1>
        <p className=" text-normal font-sourceSans font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <img src="google-logo.png" alt="" className="w-10 mt-auto" />
      </div>
    </SplideSlide>
    <SplideSlide>
      <div className=" bg-slate-200 flex flex-col items-center w-[270px] h-[381px]  shadow-lg rounded-lg p-10 gap-2">
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          className=" rounded-full object-cover w-28"
        />
        <div className="flex gap-1 text-lg">
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaRegStar />
          <FaRegStar />
        </div>
        <h1 className=" text-xl font-righteous font-semibold">
          Leopoldo Flores
        </h1>
        <p className=" text-normal font-sourceSans font-light">descripcion</p>
        <img src="google-logo.png" alt="" className=" w-10 mt-auto" />
      </div>
    </SplideSlide>
    <SplideSlide>
      <div className=" bg-slate-200 flex flex-col items-center w-[270px] h-[381px]  shadow-lg rounded-lg p-10 gap-2">
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          className=" rounded-full object-cover w-28"
        />
        <div className="flex gap-1 text-lg">
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaRegStar />
          <FaRegStar />
        </div>
        <h1 className=" text-xl font-righteous font-semibold">
          Leopoldo Flores
        </h1>
        <p className=" text-normal font-sourceSans font-light">descripcion</p>
        <img src="google-logo.png" alt="" className=" w-10 mt-auto" />
      </div>
    </SplideSlide>
    <SplideSlide>
      <div className=" bg-slate-200 flex flex-col items-center w-[270px] h-[381px]  shadow-lg rounded-lg p-10 gap-2">
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          className=" rounded-full object-cover w-28"
        />
        <div className="flex gap-1 text-lg">
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaStar className=" text-yellow-400 " />
          <FaRegStar />
          <FaRegStar />
        </div>
        <h1 className=" text-xl font-righteous font-semibold">
          Leopoldo Flores
        </h1>
        <p className=" text-normal font-sourceSans font-light">descripcion</p>
        <img src="google-logo.png" alt="" className=" w-10 mt-auto" />
      </div>
    </SplideSlide>
    
    </>
    
  );

  return reviews;
};

export default CarruselWrapper(Resenas, 3);
