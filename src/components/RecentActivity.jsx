export default function RecentActivity() {
  const activities = [
    { id: 1, text: "Completed task: Landing Page UI", time: "2 hours ago" },
    { id: 2, text: "Started project: Mobile App Redesign", time: "5 hours ago" },
    { id: 3, text: "Received payment: $1,200 from Client A", time: "1 day ago" },
    { id: 4, text: "Updated profile info", time: "2 days ago" },
  ]

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
      <ul className="space-y-3">
        {activities.map(activity => (
          <li key={activity.id} className="flex justify-between text-sm text-gray-700">
            <span>• {activity.text}</span>
            <span className="text-gray-400">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
