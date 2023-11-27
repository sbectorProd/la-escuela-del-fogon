import Image from "next/image"

export default function Fig1() {
    return (
        <div className="relative flex flex-col items-center w-full">
            <div className="w-[300] md:w-[318px]">
                <Image
                    src="/images/fogon1hq.png"
                    width={1080}
                    height={852}
                    alt="Foto de un fogón"
                    priority
                />
            </div>
            <p className="absolute left-0 top-0 text-[10px]">fig 1</p>
            <div className="w-full">
                <p className="text-[8px] w-[176px] md:w-[318px] font-thin">
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