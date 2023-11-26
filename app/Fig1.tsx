import Image from "next/image"

export default function Fig1() {
    return (
        <div className="relative flex flex-col items-center w-full h-[400px] my-10">
            <Image
                src="/fogon1.png"
                width={286}
                height={226}
                alt="Foto de un fogón"

            />
            <p className="absolute left-0 top-0">fig 1</p>
            <div className="absolute bottom-0 right-0">
                <p className="text-[8px] w-[176px] font-thin">
                    [FIG 01]
                    <br />
                    <span className="font-bold">FOGÓN;</span> Can be translated into english
                    as &quot;hearth&quot;, but it doesn&apos;t fully
                    capture the complete meaning of the word. &quot;fogón&quot; refers to a large fire, a structure
                    for cooking, and a gathering space.
                </p>
            </div>
        </div>
    )
}