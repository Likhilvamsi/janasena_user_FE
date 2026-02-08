import api from '@/lib/axios'
import { API_ROUTES } from '@/app/constants/apiRoutes'

export async function getActiveElections(token) {
  const res = await api.get(API_ROUTES.elections.activeForMe, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
