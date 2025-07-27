import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart() {
  const data = {
    labels: ["Design", "Development", "Testing"],
    datasets: [
      {
        label: "Task Distribution",
        data: [10, 15, 5],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",  // blue
          "rgba(34, 197, 94, 0.7)",   // green
          "rgba(251, 191, 36, 0.7)"   // yellow
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(251, 191, 36, 1)"
        ],
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
  
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
  
  return <Pie data={data} options={options} />
    
}
