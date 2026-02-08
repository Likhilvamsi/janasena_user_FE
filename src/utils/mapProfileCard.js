export function mapProfile(profile) {
  return {
    name: profile.name,
    mobile: profile.mobile,
    email: profile.email,
    election_status:profile.election_status,
    village:profile.village_name,
    constituency: {
      ward: `Ward ${profile.ward_number}`,
      wardName: profile.ward_name,
      mandal: profile.mandal_name,
      assembly: profile.assembly_name,
    },

    eligibility: {
      isActive: profile.is_active,
      canVote: profile.is_eligible_to_vote,
    },

    joinedAt: profile.created_at,
  }
}
