export function mapElectionDetails(data, electionId) {
  return {
    id: Number(electionId),     // ✅ IMPORTANT
    title: data.title,
    status: data.status,
    level: data.election_level,
  }
}
