export default function Menu () {

    return (
        <section>
            <div className='bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col justify-center items-center max-h-44 min-h-28 px-[10vw] sm:relative sm:flex-row sm:justify-between '>
                <div className="max-w-40">
                    <img src="Logo-rosa.png" alt="" className="bg-white" />
                </div>
                <nav className="flex gap-5 ms-center font-poppins c">
                        <a href="#catalogo" className="p-2 hover:text-violet-300">Catalogo</a>
                        <a href="#reseñas" className="p-2 hover:text-violet-300">Opiniones</a>
                        <a href="#footer" className="p-2 hover:text-violet-300">Contacto</a>
                 </nav>
            </div>
      </section>
    )
}