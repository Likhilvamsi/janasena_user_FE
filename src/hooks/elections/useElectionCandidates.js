'use client'

import { useEffect, useState } from 'react'
import { fetchElectionCandidates } from '../../lib/vote/candidates.client'
import { mapCandidate } from '@/utils/mapCandidate'

export function useElectionCandidates(electionId) {
  const [election, setElection] = useState(null)
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!electionId) return

    async function load() {
      try {
        setLoading(true)

        const data = await fetchElectionCandidates(electionId)

        setElection({
          title: data.title,
          status: data.status,
          level: data.election_level,
        })

        setCandidates(
          data.candidates.map(mapCandidate)
        )
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [electionId])

  return { election, candidates, loading, error }
}
