import Link from "next/link"
import Button from "@/app/_components/Button"

export default function ArchivoPage() {
    return (
        <section id="about" className="bg-[#d19465] w-full py-14 px-8 lg:px-40 min-h-screen flex flex-col place-content-center overflow-hidden">

            <>
                <h1>Archivo</h1>
                <p>
                    Black Panthers
                    Oakland, California
                    <br />
                    Los Fogones
                    de Cherán
                    Cherán, Michoacán
                    <br />
                    Quema de Chiles
                    Cuernavaca, Morelos
                    <br />
                    Anarcocholas
                    La Paz, Bolívia
                    <br />
                    Panaderos
                    Anarquistas
                    Argentina
                    <br />
                    Brigada Totopo
                    Juchitán, Oaxaca
                    <br />
                    Las Patronas
                    Guadalupe, La Patrona,
                    Veracruz
                    <br />
                    McZócalo
                    Toledo
                    Oaxaca, Oaxaca
                    <br />
                    Ollas Comunes
                    Chile
                </p>
            </>
            <div className="p-4 m-auto">
                <Link href={'/proyectos/cocinar-la-rev'}>
                    <Button>
                        Regresar
                    </Button>
                </Link>
            </div>
        </section>
    )
}