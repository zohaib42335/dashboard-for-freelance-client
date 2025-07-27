import Card from "../components/Card"
import { FaTasks, FaDollarSign, FaProjectDiagram } from "react-icons/fa"
import BarChart from "../charts/BarChart"
import PieChart from "../charts/PieChart"
import RecentActivity from "../components/RecentActivity"

export default function Overview() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card title="Total Projects" value="8" icon={<FaProjectDiagram />} color="blue" />
        <Card title="Earnings" value="$4,200" icon={<FaDollarSign />} color="green" />
        <Card title="Tasks Due" value="5" icon={<FaTasks />} color="red" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <BarChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <PieChart />
        </div>
      </div>
      <RecentActivity/>
    </div>
  )
}
