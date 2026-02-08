export function ElectionCardShimmer() {
  return (
    <div className="bg-white border rounded-xl p-4 flex justify-between items-center animate-pulse">
      <div className="space-y-2 flex-1">
        <div className="flex gap-2">
          <div className="h-4 w-12 rounded-full bg-gray-200" />
          <div className="h-4 w-20 rounded-full bg-gray-200" />
        </div>

        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-3 w-32 rounded bg-gray-200" />
      </div>

      <div className="h-5 w-5 rounded bg-gray-200 ml-4" />
    </div>
  )
}
