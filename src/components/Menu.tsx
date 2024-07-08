export default function Menu () {

    return (
        <section>
            <div className= 'bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  z-10 fixed sm:shadow sm:relative flex flex-col justify-center items-center sm:flex-row sm:justify-around '>
                <img src="Logo-rosa.png" alt="" className="w-[35%] md:w-1/3 lg:w-1/5 bg-white" />
                <nav className="font-poppins flex items-center gap-5 mb-5">
                    <a href="#catalogo" className=" p-1 hover:text-violet-300">catalogo</a>
                    <a href="#reseñas" className=" p-1 hover:text-violet-300">reseñas</a>
                    <a href="#delivery" className=" p-1 hover:text-violet-300">delivery</a>
                    <a href="#footer" className=" p-1 hover:text-violet-300">contacto</a>
                </nav>
            </div>
      </section>
    )
}