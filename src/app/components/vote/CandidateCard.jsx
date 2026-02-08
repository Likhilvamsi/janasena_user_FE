import { useCastVote } from '../../../hooks/caste-vote/useCastVote'

export default function CandidateCard({ candidate, electionId }) {
  const { castVote, loading, success } = useCastVote()

  const handleVote = () => {
    castVote({
      electionId,
      candidateId: candidate.id,
    })
  }

  return (
    <div className="bg-white border rounded-2xl p-4 sm:p-6 space-y-4">
      <div className="flex gap-4">
        <img
          src={candidate.image}
          alt={candidate.name}
          className="w-16 h-16 rounded-full object-cover border"
        />

        <div>
          <h3 className="text-lg font-semibold">
            {candidate.name}
          </h3>

          <p className="text-sm text-gray-600">
            {candidate.description}
          </p>
        </div>
      </div>

      <button
        disabled={loading || success}
        onClick={handleVote}
        className={`
          w-full py-2 rounded-xl font-medium transition
          ${
            success
              ? 'bg-green-600 text-white'
              : 'bg-[#bf4040] text-white hover:bg-hover'
          }
        `}
      >
        {success ? 'Voted' : loading ? 'Submitting…' : 'Vote'}
      </button>
    </div>
  )
}
