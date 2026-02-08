export async function fetchActiveElections() {
  const res = await fetch('/api/elections/active')

  if (!res.ok) {
    const data = await res.json()
    throw {
      message: data.message || 'Failed to fetch elections',
      status: res.status,
    }
  }

  return res.json()
}
