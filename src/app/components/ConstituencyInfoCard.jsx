import { MapPin } from 'lucide-react'

export default function ConstituencyInfoCard({ profile }) {
  if (!profile || !profile.constituency) return null

  const { constituency } = profile

  return (
    <div className="bg-white border rounded-2xl p-4 sm:p-6 space-y-4">
      {/* HEADER */}
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <MapPin size={18} />
        <span>Your Constituency</span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoBox
          label="Ward"
          value={constituency.wardName || constituency.ward || '—'}
        />
        <InfoBox
          label="Mandal"
          value={constituency.mandal || '—'}
        />
        <InfoBox
          label="Assembly"
          value={constituency.assembly || '—'}
        />
        <InfoBox
          label="Parliament"
          value="—"
        />
      </div>
    </div>
  )
}

/* ---------- Small reusable box ---------- */

function InfoBox({ label, value }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-900">
        {value}
      </p>
    </div>
  )
}
