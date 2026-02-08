import ProfileCard from './ProfileCard'
import ApplyCandidateCard from './ApplyCandidateCard'
import LiveElections from './LiveElections'
 import { useProfile } from '../../hooks/profile/useProfile';
 import {useActiveElections} from '../../hooks/elections/useActiveElections'
 import { ElectionCardShimmer } from './shimmers/ElectionCardShimmer';
 import { LiveElectionsShimmer } from './shimmers/LiveElectionsShimmer';
 import { ApplyCandidateCardShimmer } from './shimmers/ApplyCandidateCardShimmer';
 import { ProfileCardShimmer } from './shimmers/ProfileCardShimmer';
export default function DashboardOverview() {
  const { profile } = useProfile()
  const { elections } = useActiveElections()
  return (
    <div className="space-y-6">
      {!profile
        ? <ProfileCardShimmer />
        : <ProfileCard profile={profile} />}

      {!elections || !profile
        ? <ApplyCandidateCardShimmer />
        : (
          <ApplyCandidateCard
            elections={elections}
            electionStatus={profile.election_status}
          />
        )}

      {!elections
        ? <LiveElectionsShimmer />
        : <LiveElections elections={elections} />}
    </div>
  )
}
