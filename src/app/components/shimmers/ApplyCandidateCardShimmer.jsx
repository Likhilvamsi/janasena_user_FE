export function ApplyCandidateCardShimmer() {
  return (
    <div className="border border-dashed rounded-xl p-4 sm:p-6 flex gap-4 items-center animate-pulse">
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-gray-200" />

      {/* Text */}
      <div className="flex-1 space-y-2">
        <div className="h-4 w-44 rounded bg-gray-200" />
        <div className="h-3 w-64 rounded bg-gray-200" />
      </div>

      {/* Button */}
      <div className="h-9 w-24 rounded-lg bg-gray-200" />
    </div>
  )
}
