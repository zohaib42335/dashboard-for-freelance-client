export default function Projects() {
  const projects = [
    {
      name: "Website Redesign",
      status: "In Progress",
      deadline: "2025-08-10",
    },
    {
      name: "Mobile App",
      status: "Completed",
      deadline: "2025-07-20",
    },
    {
      name: "Branding Kit",
      status: "Pending",
      deadline: "2025-08-05",
    },
    {
      name: "Social Media Campaign",
      status: "In Progress",
      deadline: "2025-08-15",
    },
  ]

  const statusColor = {
    "In Progress": "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-gray-100 text-gray-700",
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
              <p className={`inline-block px-2 py-1 text-xs rounded ${statusColor[project.status]}`}>
                {project.status}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <span className="font-medium text-gray-600">Deadline:</span>{" "}
              {project.deadline}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
