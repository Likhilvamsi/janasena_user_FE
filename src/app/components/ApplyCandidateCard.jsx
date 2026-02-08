import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import ApplyPopup from './ApplyPopup'

export default function ApplyCandidateCard({ elections, electionStatus }) {
  const [open, setOpen] = useState(false)

  const nominationOpen = elections.some(
    e => e.status === 'nomination_open'
  )

  const isDisabled = !electionStatus || !nominationOpen

  return (
    <>
      <div
        className={`
          rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center
          border border-dashed
          ${
            electionStatus
              ? 'border-red-300 bg-red-50'
              : 'border-gray-300 bg-gray-100 opacity-70'
          }
        `}
      >
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700">
          👥
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            Apply as Candidate
          </h3>

          <p className="text-sm text-gray-600">
            {!electionStatus
              ? 'You are not eligible to apply as a candidate.'
              : nominationOpen
                ? 'Nominations are open. Apply to contest in the election.'
                : 'No active nominations at the moment.'}
          </p>
        </div>

        <button
          disabled={isDisabled}
          onClick={() => setOpen(true)}
          className={`
            inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg
            ${
              !isDisabled
                ? 'text-red-700 border border-red-700 hover:bg-red-700 hover:text-white'
                : 'text-gray-400 border border-gray-300 cursor-not-allowed'
            }
          `}
        >
          Apply Now
          <ChevronRight size={16} />
        </button>
      </div>

      {open && (
        <ApplyPopup
          elections={elections}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
