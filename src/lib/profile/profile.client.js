export async function fetchProfileData() {
  const res = await fetch('/api/profile')

  if (!res.ok) {
    const data = await res.json()
    throw {
      message: data.message || 'Failed to fetch profile',
      status: res.status,
    }
  }

  return res.json()
}
