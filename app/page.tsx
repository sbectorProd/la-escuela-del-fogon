import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-wrap items-center justify-center">
      <div className="w-[300px] sm:w-[500px]">
        <h1 className="text-[42px] sm:text-[70px] text-stone-700 dark:text-amber-50 text-justify leading-tight">LA ESCUELA DEL FOGÓN
          <span className="w-full inline-block"></span></h1>
      </div>
        <Link href={'./'} className="pb-20">
          <div className="bg-pink-400 shadow-xl py-2 w-[300px] sm:w-[500px] shadow-amber-800 ">
            <h2 className="text-[10px] sm:text-[16px] text-slate-700 text-center">COCINANDO LA REVOLUCIÓN EN AMÉRICA</h2>
          </div>
        </Link>
    </main>
  )
}

const className = ''