import Button from "@/app/_components/Button";
import Link from "next/link";

export default function CocinandoPage() {
    return (
        <section id="about" className="bg-[#BC6E33] text-white w-full py-14 px-8 lg:py-32 lg:px-40 min-h-screen flex flex-col place-content-center overflow-hidden">
            <h1>
                LA ESCUELA DEL FOGÓN
            </h1>
            <h2 className="pb-6">
                Cocinar la revolución en América
            </h2>
            <h3 className="text-black text-sm pb-6">
                La escuela del fogón. Cocinar la revolución en América<br />
                Un proyecto de Co.merr<br />
                Del 27 de mayo al 27 de agosto de 2023
            </h3>
            <p className="text-black text-xs">
                La escuela del fogón es un archivo que documenta movimientos de protesta en América a través de la cocina. Los fogones que une esta investigación comparten en su manera de resistencia y cuidado de y para los bienes comunes las posibilidades de la organización autónoma vinculadas a la misma respuesta: Sacar la cocina a la calle cuando comer y sobrevivir se vuelven la misma cosa.
                <br />
                <br />
                En la economía del fogón se cuida, se cocina, se come, también se organiza la autodefensa, se prende la revuelta y se vigila poniendo el cuerpo; para cocinar como para protestar hay que poner el cuerpo. Guisar en una olla común en torno a la leña, una actividad históricamente feminizada, cambia el rumbo de las comunidades hacia donde realmente quieren dirigirse. En la mayoría de los movimientos que componen este archivo, las mujeres toman la organización de las comunidades desde el agenciamiento de la cocina como un espacio de conocimiento colectivo, charla, afectos y emancipación.
                <br />
                <br />
                Co.merr es un proyecto curatorial dedicado a los cruces entre el arte relacional, el espacio público y la comida, en el que se trabaja desde la desmaterialización de las prácticas artísticas. Para reunir este archivo en constante construcción, se recopilaron anécdotas, carteles, números de cuenta para donaciones, blogs sin actualizar, documentales, libros, fotografías de baja resolución, una playera, entre distintos elementos.
                <br />
                <br />
                La muestra es realizada gracias al uso de información de internet, al contacto con periodistas, charlas con cocineras, la gran aportación del archivo Toledo, el equipo del MAZ y sobre todo, el pensar en el arte como una forma de visualización de datos sensibles.
                <br />
                <br />
                La presencia de una estufa lorena, o patsari, una ecotecnia que respeta la importancia de uso del fuego en las comunidades y fomenta prácticas respetuosas con el cuerpo y el medio ambiente, abre la invitación a los visitantes para solicitar leña en la recepción del museo y cocinar cuando se desee.
                <br />
                <br />
                Ante el despojo y la violencia, hay quienes cocinan para compartir, pertenecer y resistir.
            </p>
            <div className="p-10 m-auto">
                <Link href={'/proyectos/cocinar-la-rev/archivo'}>
                    <Button>
                        Archivo
                    </Button>
                </Link>
                <Link href={'/proyectos/cocinar-la-rev/fogon'}>
                    <Button>
                        Fogón
                    </Button>
                </Link>
            </div>
        </section>
    )
}