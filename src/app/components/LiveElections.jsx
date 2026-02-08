import { Radio } from 'lucide-react'
import ElectionCard from './ElectionCard'

export default function LiveElections({ elections = [] }) {
  const activeElections = elections.filter(
    e => !e.timing?.ended
  )

  return (
    <div className="space-y-3">
      <h3 className="flex items-center gap-2 font-semibold text-gray-900">
        <Radio size={16} className="text-red-600" />
        Live Elections
      </h3>

      {activeElections.length === 0 ? (
        <p className="text-sm text-gray-500">
          No active elections at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeElections.map(election => (
            <ElectionCard
              key={election.id}
              id={election.id}              
              title={election.title}
              status={election.status}
              canVote={election.canVote}
            />
          ))}
        </div>
      )}
    </div>
  )
}
