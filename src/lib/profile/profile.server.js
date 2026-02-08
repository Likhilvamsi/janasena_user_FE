import api from '@/lib/axios'
import { API_ROUTES } from '@/app/constants/apiRoutes'

export async function getProfile(token) {
  const res = await api.get(API_ROUTES.profile.me, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
}
