export function mapCandidate(candidate) {
  return {
    id: candidate.candidate_id,
    name: candidate.name,
    photo: candidate.photo_url,
    bio: candidate.bio,
  }
}
