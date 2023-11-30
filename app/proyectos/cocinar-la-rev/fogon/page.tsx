import Link from "next/link"
import Button from "@/app/_components/Button"

export default function FogonPage() {
    return (
        <section id="about" className="bg-[#d19465] w-full py-14 px-8 lg:px-40 min-h-screen flex flex-col place-content-center overflow-hidden">

            <>
                <h1>FOGÓN</h1>
                <p>
                    A la par del archivo, se construyó una estufa lorena o estufa patsari que se presentaba como una invitación abierta para cocinar en el museo.
                    <br />
                    <br />
                    <br />
                    El taller
                    Al finalizar las actividades en el MAZ, esta estufa fue donada a una de las colmenas en Zapopan, espacios colectivos de vinculación comunitaria.
                </p>
            </>
            <Link href={'/proyectos/cocinar-la-rev'}>
                <Button>
                    Regresar
                </Button>
            </Link>
        </section>
    )
}