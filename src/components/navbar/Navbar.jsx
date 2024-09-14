import SideButton from "./SideButton"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='relative flex items-center justify-between w-full bg-[var(--color-primary)] overflow-x-hidden overflow-y-hidden'>

      <Link to={'/login'}>
        <div className="z-10 flex flex-row items-center justify-center w-auto h-auto gap-2 p-4 font-semibold text-black md:gap-4 lg:gap-0 max-sm:hidden md:text-lg hover:cursor-pointer lg:text-xl drop-shadow-md">
          <span className="transition hover:cursor-pointer hover:scale-125">L</span>
          <span className="transition hover:cursor-pointer hover:scale-125">o</span>
          <span className="transition hover:cursor-pointer hover:scale-125">g</span>
          <span className="ml-2 transition hover:cursor-pointer hover:scale-125">i</span>
          <span className="transition hover:cursor-pointer hover:scale-125">n</span>
          <span className="ml-8 transition hover:cursor-pointer hover:scale-125">C</span>
          <span className="transition hover:cursor-pointer hover:scale-125">r</span>
          <span className="transition hover:cursor-pointer hover:scale-125">e</span>
          <span className="transition hover:cursor-pointer hover:scale-125">a</span>
          <span className="transition hover:cursor-pointer hover:scale-125">t</span>
          <span className="transition hover:cursor-pointer hover:scale-125">e</span>
          <span className="ml-2 transition hover:cursor-pointer hover:scale-125">f</span>
          <span className="transition hover:cursor-pointer hover:scale-125">r</span>
          <span className="transition hover:cursor-pointer hover:scale-125">e</span>
          <span className="transition hover:cursor-pointer hover:scale-125">e</span>
          <span className="ml-2 transition hover:cursor-pointer hover:scale-125">A</span>
          <span className="transition hover:cursor-pointer hover:scale-125">c</span>
          <span className="transition hover:cursor-pointer hover:scale-125">c</span>
          <span className="transition hover:cursor-pointer hover:scale-125">o</span>
          <span className="transition hover:cursor-pointer hover:scale-125">u</span>
          <span className="transition hover:cursor-pointer hover:scale-125">n</span>
          <span className="transition hover:cursor-pointer hover:scale-125">t</span>
        </div>
      </Link>
      <SideButton />
    </div>
  )
}

export default Navbar
