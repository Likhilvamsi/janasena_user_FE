export const API_ROUTES = {
 profile: {
    me: '/users/me',
  },
  elections: {
    activeForMe: '/elections/active-for-me',
     candidates: electionId =>
      `/elections/elections/${electionId}/candidates`, 
  },
  votes: {
    cast: '/votes/cast',
  },
}
