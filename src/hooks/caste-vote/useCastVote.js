'use client'

import { useState } from 'react'
import { castVoteClient } from '../../lib/casteVote/casteVote.client'

export function useCastVote() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const castVote = async ({ electionId, candidateId }) => {
    try {
      setLoading(true)
      setError(null)

      await castVoteClient({
        election_id: Number(electionId),    // ✅ ENSURE NUMBER
        candidate_id: Number(candidateId),  // ✅ ENSURE NUMBER
      })

      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { castVote, loading, error, success }
}
