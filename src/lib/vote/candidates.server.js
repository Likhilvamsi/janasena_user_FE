import api from '@/lib/axios'
import { API_ROUTES } from '@/app/constants/apiRoutes'

export async function getElectionCandidates(token, electionId) {
  const res = await api.get(
    API_ROUTES.elections.candidates(electionId),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return res.data
}
