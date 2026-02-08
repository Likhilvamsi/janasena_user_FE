import { ElectionCardShimmer } from './ElectionCardShimmer'

export function LiveElectionsShimmer() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 w-32 rounded bg-gray-200" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <ElectionCardShimmer key={i} />
        ))}
      </div>
    </div>
  )
}
