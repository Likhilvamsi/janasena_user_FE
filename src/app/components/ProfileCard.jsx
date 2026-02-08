import { MapPin } from 'lucide-react'

export default function ProfileCard({ profile }) {
  if (!profile) return null

  const initials = profile.name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="bg-white border rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
      <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-semibold">
        {initials || 'U'}
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">
          {profile.name}
        </h2>

        <p className="text-sm text-gray-500 flex items-center gap-1">
          <MapPin size={14} />
          {profile.constituency.ward}, {profile.constituency.mandal}, {profile.village}
        </p>

        <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
          Party Member
        </span>
      </div>
    </div>
  )
}
