import { HiMenu } from "react-icons/hi"

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between md:justify-start">
      <button onClick={onMenuClick} className="md:hidden mr-4 text-gray-700">
        <HiMenu size={24} />
      </button>
      <h2 className="text-lg font-semibold">Freelance Admin Dashboard</h2>
    </header>
  )
}
