import Fig1 from "./Fig1"
import Logo from "./Logo"


export default function Home() {
  return (
    <main className="w-[318px] flex flex-col flex-wrap items-center max-w-screen overflow-x-hidden">
      <Logo />
      <Fig1 />
    </main>
  )
}