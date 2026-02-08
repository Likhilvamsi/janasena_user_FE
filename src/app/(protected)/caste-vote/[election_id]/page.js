'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Check } from 'lucide-react'
import { useElectionCandidates } from '@/hooks/elections/useElectionCandidates'
import { castVoteClient } from '@/lib/casteVote/casteVote.client'

export default function CastVotePage() {
  const params = useParams()

  // ✅ MUST match folder name [election_id]
  const electionId = Number(params.election_id)

  const {
    election,
    candidates,
    loading,
    error,
  } = useElectionCandidates(electionId)

  const [selectedId, setSelectedId] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  if (loading) {
    return <div className="p-6">Loading…</div>
  }

  if (error) {
    return (
      <div className="p-6 text-red-500">
        Failed to load candidates
      </div>
    )
  }

  const selectedCandidate = candidates.find(
    c => c.id === selectedId
  )

  async function handleSubmit() {
    if (!selectedId) return

    try {
      setSubmitting(true)

      await castVoteClient({
        election_id: electionId,   // ✅ from URL
        candidate_id: selectedId,  // ✅ from selection
      })

      setSuccess(true)
    } catch (err) {
      alert(err.message || 'Vote failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* Election Header */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h1 className="text-lg font-semibold">
          {election.title}
        </h1>

        <div className="flex gap-2 mt-2">
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
            {election.level}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
            {election.status}
          </span>
        </div>
      </div>

      <p className="font-medium">Select a Candidate</p>

      {/* Candidates */}
      <div className="space-y-4">
        {candidates.map(candidate => {
          const isSelected = candidate.id === selectedId

          return (
            <div
              key={candidate.id}
              onClick={() => setSelectedId(candidate.id)}
              className={`
                relative cursor-pointer rounded-xl border p-4 flex gap-4
                transition-all
                ${
                  isSelected
                    ? 'border-red-600 bg-red-50'
                    : 'border-gray-200 bg-white'
                }
              `}
            >
              <img
                src={candidate.photo}
                alt={candidate.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div className="flex-1">
                <p className="font-semibold">
                  {candidate.name}
                </p>

                <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-gray-100">
                  Ward
                </span>

                <p className="text-sm text-gray-600 mt-2">
                  {candidate.bio || 'No bio'}
                </p>
              </div>

              {isSelected && (
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-red-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Submit Vote */}
      <button
        disabled={!selectedId || submitting || success}
        onClick={handleSubmit}
        className={`
          w-full py-3 rounded-xl font-semibold text-white transition
          ${
            success
              ? 'bg-green-600'
              : selectedId
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-gray-300 cursor-not-allowed'
          }
        `}
      >
        {success
          ? `Vote Submitted for ${selectedCandidate.name}`
          : submitting
          ? 'Submitting…'
          : selectedCandidate
          ? `Submit Vote for ${selectedCandidate.name}`
          : 'Select a candidate to vote'}
      </button>
    </div>
  )
}
