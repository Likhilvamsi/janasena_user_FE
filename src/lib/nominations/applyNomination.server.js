import api from '@/lib/axios'

export async function applyNomination(token, formData) {
  const res = await api.post(
    '/nominations/apply',
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        // ❗ DO NOT set Content-Type manually
      },
    }
  )

  return res.data
}
