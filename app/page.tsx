import Fig1 from "./Fig1"
import Logo from "./Logo"
import About from "./about/page"


export default function Home() {
  return (
    <main className=''>
      <section id="home" className="bg-amber-50 w-full min-h-screen grid place-items-center overflow-hidden">
        <div className="grid gap-10 w-[318px] md:w-[738px] md:grid-cols-2 h-full place-items-center">
          <Logo />
          <Fig1 />
        </div>
      </section>
      <section id="about" className="bg-teal-50 w-full h-screen grid items-center">
        <About />
      </section>
    </main>
  )
}