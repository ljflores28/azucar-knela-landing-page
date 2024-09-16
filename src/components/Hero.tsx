import { Button } from "rsuite";
import HeaderH1 from "./atomos/HeaderH1";

export default function Hero() {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2">
      {/*MENSAJE*/}
      <div className="flex flex-col self-center justify-center gap-4 mx-3 justify-items-center">
        <HeaderH1>
          Las tortas más <br /> deliciosas de{" "}
          <span className="inline-block -rotate-12 text-violet-700">BA!</span>
        </HeaderH1>
        <p className="text-sm font-light font-poppins md:text-sm xl:text-xl">
          Pasteleria y postres personalizados.
          <br />
          ¡Haz que tus momentos se vuelvan <br /> dulces con nosotros!
        </p>
        <div className="text-white font-poppins xl:text-xl">
          <Button
            appearance="primary"
            size="lg"
            className=" bg-[#fb7185] w-full sm:w-fit hover:bg-[#fb71cb] focus:bg-[#fb7185]"
          >
            ¡Pedí tu presupuesto!
          </Button>

        </div>
      </div>
      {/*IMAGEN*/}
      <div className="relative flex mt-4 sm:mt-0 md:col-span-1 xl:col-span-1 justify-items-center">
        <img src="cake-hero.png" alt="_blank" className="absolute" />
        <img src="blob.svg" alt="_blank" className="" />
      </div>
    </section>
  );
}
