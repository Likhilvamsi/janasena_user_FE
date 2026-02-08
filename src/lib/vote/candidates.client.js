export async function fetchElectionCandidates(electionId) {
  const res = await fetch(
    `/api/elections/${electionId}/candidates`
  )

  if (!res.ok) {
    const data = await res.json()
    throw new Error(
      data.message || 'Failed to fetch candidates'
    )
  }

  return res.json()
}
