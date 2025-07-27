export default function Card({ title, value, icon, color = "blue" }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
  }

  return (
    <div className="p-4 rounded shadow bg-white">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-gray-500 text-sm">{title}</h4>
          <p className="text-xl font-bold">{value}</p>
        </div>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${colorMap[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  )
}
