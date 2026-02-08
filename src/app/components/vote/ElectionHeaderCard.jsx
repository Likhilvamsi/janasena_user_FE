export default function ElectionHeaderCard({ title, level, status }) {
  return (
    <div className="bg-white border rounded-2xl p-4 sm:p-6 space-y-3">
      <h1 className="text-xl font-semibold text-gray-900">
        {title}
      </h1>

      <div className="flex gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
          {level}
        </span>

        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
          {status}
        </span>
      </div>
    </div>
  )
}
