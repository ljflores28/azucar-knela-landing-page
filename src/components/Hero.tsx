export function Hero(){
    return (
        <section className="bg-white h-[80vh] grid grid-cols-2 justify-items-center ">
            <div className="relative flex flex-col items-start justify-center p-12 bottom-10 ">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl font-righteous leading-[5.5rem]">Los pasteles más <br /> deliciosos de <span className=" inline-block -rotate-12 text-violet-700">BA!</span></h1>
                    <p className="text-xl font-light font-sourceSans">Pasteleria y postres personalizados. <br /> ¡Haz que tus momentos se vuelvan  <br /> dulces con nosotros!</p>
                    <div className="flex items-center">
                        <button className=" bg-rose-400 py-2 px-3 rounded-xl text-xl text-white hover:bg-[#23EBD9] focus:ring-4 focus:outline-none focus:ring-[#FFB1D6] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">¡Ordena Ahora!</button>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center items-center bottom-10">
                <img src="cake-hero.png" alt="" className="object-cover z-10 w-[75vh]" />
                <img src="blob.svg" alt="" className="absolute object-cover translate-x-0 w-[80vh]" />
            </div>
        </section>
    )
}