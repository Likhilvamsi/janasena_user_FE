export async function applyNominationClient(formData) {
  const res = await fetch('/api/nominations/apply', {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const data = await res.json()
    throw new Error(data.message)
  }

  return res.json()
}
