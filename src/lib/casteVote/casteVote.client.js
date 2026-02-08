export async function castVoteClient(payload) {
  const res = await fetch('/api/vote/cast', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const data = await res.json()
    throw new Error(
      data.message || 'Failed to cast vote'
    )
  }

  return res.json()
}
