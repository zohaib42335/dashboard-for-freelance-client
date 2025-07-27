import { NavLink } from "react-router-dom"
import { IoClose } from "react-icons/io5"

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed z-30 inset-y-0 left-0 w-64 bg-blue-700 text-white p-6 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block`}
    >
      <div className="flex justify-between items-center md:hidden mb-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={onClose}>
          <IoClose size={24} />
        </button>
      </div>

      <h1 className="hidden md:block text-2xl font-bold mb-6">Dashboard</h1>
      <nav className="space-y-3">
        <NavLink to="/" className="block hover:bg-blue-600 px-3 py-2 rounded">Overview</NavLink>
        <NavLink to="/projects" className="block hover:bg-blue-600 px-3 py-2 rounded">Projects</NavLink>
      </nav>
    </div>
  )
}
