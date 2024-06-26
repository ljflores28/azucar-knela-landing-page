/* eslint-disable react-refresh/only-export-components */
import { SplideSlide } from "@splidejs/react-splide";
import { FaStar, FaRegStar } from "react-icons/fa";
import CarruselWrapper from "../hoc/CarruselWrapper";

type reviewCard = {
  urlImagen: string,
  nombre: string,
  descripcion: string,
  reviewStars: number
};

const reviewList: reviewCard[] = [
  {
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100%",
    "reviewStars": 4
  },
  {
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100%",
    "reviewStars": 2
  },
  {
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100%",
    "reviewStars": 5
  },
  {
    "urlImagen": "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    "nombre": "leopoldo flores",
    "descripcion": "tremendo local lo recomiendo al 100%",
    "reviewStars": 5
  }
];

const Resenas: React.FC = () => {
  
  const StarsReviews = (startsNumber: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++){
      (i <= startsNumber) ? 
       stars.push(<FaStar className={"text-yellow-400"} />) :
       stars.push(<FaRegStar />)
    } 
    return stars;
  }
  
  const reviewCards = reviewList.map((review, index) => {
    return <SplideSlide key={index} onClick={() => window.location.href="https://google.com"}>
      <div className=" hover:cursor-pointer bg-slate-200 flex flex-col items-center w-[270px] h-[381px] shadow-lg rounded-lg p-10 gap-2">
        <img
          src={review.urlImagen}
          className=" rounded-full object-cover w-28"
        />
        <div className="flex gap-1 text-lg">
          {StarsReviews(review.reviewStars)}
        </div>
          <h1 className=" text-xl font-righteous font-semibold">
          {review.nombre}
        </h1>
        <p className=" text-normal font-sourceSans font-light">
          {review.descripcion}
        </p>
        <img src="google-logo.png" alt="" className=" w-10 mt-auto" />
      </div>
    </SplideSlide>
  });

  return (
    <>
      {reviewCards}
    </>
    ); 
};

export default CarruselWrapper(Resenas, 3);
