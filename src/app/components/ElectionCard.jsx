'use client'

import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ElectionCard({
  id,
  title,
  status,
  canVote,
}) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/caste-vote/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white border rounded-xl p-4 flex items-center justify-between
                 hover:shadow-sm transition cursor-pointer"
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs px-2 py-0.5 rounded-full bg-red-600 text-white">
            LIVE
          </span>

          <span className="text-xs px-2 py-0.5 rounded-full border text-gray-600 capitalize">
            {status.replace('_', ' ')}
          </span>
        </div>

        <h4 className="font-medium text-gray-900">
          {title}
        </h4>

        <p className="text-xs text-gray-500">
          {canVote ? 'You can vote now' : 'Voting not started'}
        </p>
      </div>

      <ChevronRight className="text-gray-400" />
    </div>
  )
}
