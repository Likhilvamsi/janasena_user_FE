'use client'

import { useEffect, useState } from 'react'
import { fetchProfileData } from '@/lib/profile/profile.client'
import { mapProfile } from '../../utils/mapProfileCard'

export function useProfile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const data = await fetchProfileData()
        setProfile(mapProfile(data))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { profile, loading, error }
}
