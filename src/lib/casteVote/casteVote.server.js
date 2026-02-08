import api from '@/lib/axios'

export async function castVote(token, payload) {
  const res = await api.post(
    '/votes/cast',
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return res.data
}
