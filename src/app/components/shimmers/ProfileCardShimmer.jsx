export function ProfileCardShimmer() {
  return (
    <div className="bg-white border rounded-xl p-4 sm:p-6 flex gap-4 animate-pulse">
      {/* Avatar */}
      <div className="w-14 h-14 rounded-full bg-gray-200" />

      {/* Info */}
      <div className="flex-1 space-y-2">
        <div className="h-4 w-40 rounded bg-gray-200" />
        <div className="h-3 w-56 rounded bg-gray-200" />
        <div className="h-5 w-24 rounded-full bg-gray-200 mt-2" />
      </div>
    </div>
  )
}
