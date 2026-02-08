export function mapElection(e) {
  return {
    id: e.election_id,
    title: e.title,
    status: e.status.toLowerCase(), // nomination_open
    canVote: e.can_vote,

    timing: {
      start: e.voting_start,
      end: e.voting_end,
      started: e.voting_started,
      ended: e.voting_ended,
    },

    badges: {
      live: !e.voting_ended,
      phase: e.status.replace('_', ' ').toLowerCase(),
    },
  }
}
