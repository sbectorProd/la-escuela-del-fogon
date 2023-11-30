import Image from "next/image"
import Link from "next/link"

export default function Fig1() {
    return (
        <div className="text-[#797F65] relative flex flex-col items-center w-full">
            <div className="w-[300] md:w-[318px]">
                <Link href={'/proyectos/cocinar-la-rev'}>
                <Image
                    src="/images/fogon1hq.png"
                    width={1080}
                    height={852}
                    alt="Foto de un fogón"
                    priority
                    className="hover:invert"
                />
                </Link>
            </div>
            <p className="absolute left-0 top-0 text-[10px]">fig 1</p>
            <div className="w-full py-6">
                <p className="text-[8px] w-[176px] md:w-[318px] font-thin">
                    [FIG 01]
                    <br />

                    La palabra <span className="font-bold">&quot;FOGÓN&quot;</span> se refiere a un fuego grande, una estructura para cocinar y un espacio de reunión.
                </p>
            </div>
        </div>
    )
}