import Fig1 from "./Fig1"
import Logo from "./Logo"
import About from "./about/page"


export default function Home() {
  return (

    <section id="home" className="bg-[#F2F4E0] w-full min-h-screen grid place-items-center overflow-hidden">
      <div className="grid gap-10 w-[318px] lg:w-[738px] lg:grid-cols-2 h-full place-items-center">
        <Logo />
        <Fig1 />
      </div>
    </section>

  )
}