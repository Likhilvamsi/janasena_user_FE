'use client'

import { useEffect, useState } from 'react'
import { fetchActiveElections } from '@/lib/elections/elections.client'
import { mapElection } from '@/utils/mapElection'

export function useActiveElections() {
  const [elections, setElections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const data = await fetchActiveElections()
        setElections(data.map(mapElection))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { elections, loading, error }
}
