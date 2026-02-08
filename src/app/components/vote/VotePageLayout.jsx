import ElectionHeaderCard from './ElectionHeaderCard'
import CandidatesList from './CandidatesList'

export default function VotePageLayout({ election, candidates }) {
  const handleVote = candidateId => {
    console.log('Vote submitted for candidate:', candidateId)
    // later → POST /vote/{election_id}
  }

  return (
    <div className="lg:max-w-[600px] mx-auto space-y-6 p-3 sm:p-6">
      <ElectionHeaderCard
        title={election.title}
        level={election.level}
        status={election.status}
      />

      <CandidatesList
        candidates={candidates}
        onVote={handleVote}
      />
    </div>
  )
}
