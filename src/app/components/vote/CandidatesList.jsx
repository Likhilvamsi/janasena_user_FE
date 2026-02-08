import CandidateCard from './CandidateCard'

export default function CandidatesList({ candidates, onVote }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Select a Candidate
      </h2>

      {candidates.map(candidate => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          onVote={onVote}
        />
      ))}
    </div>
  )
}
