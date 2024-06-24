export function Header () {

    return (
        <header className="flex items-center justify-between h-[20vh] bg-white p-12">
            <img src="Logo-rosa.png" alt="Logo de Azucas & Canela" className="w-[300px]" />
            <nav className="relative flex gap-8 mr-20 font-sourceSans font-light mb-auto " >
                <a href="" className=" hover:text-violet-300">Inicio</a>
                <a href="" className=" hover:text-violet-300">Catalogo</a>
                <a href="" className=" hover:text-violet-300">Reseñas</a>
                <a href="" className=" hover:text-violet-300">Contacto</a>
            </nav>
        </header>
    )
}