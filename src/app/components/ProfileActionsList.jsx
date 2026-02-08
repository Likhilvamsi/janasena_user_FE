import { ChevronRight, FileText, Bell, HelpCircle } from 'lucide-react'

export default function ProfileActionsList() {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden">
      
      <ActionItem
        icon={<FileText className="text-red-600" />}
        title="Apply as Candidate"
        subtitle="Stand for election"
        active
      />

      <Divider />

      <ActionItem
        icon={<Bell className="text-gray-600" />}
        title="Notifications"
        subtitle="Manage alerts"
      />

      <Divider />

      <ActionItem
        icon={<HelpCircle className="text-gray-600" />}
        title="Help & Support"
        subtitle="Get assistance"
      />

    </div>
  )
}

/* ---------- Reusable row ---------- */

function ActionItem({ icon, title, subtitle, active }) {
  return (
    <button
      className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left hover:bg-gray-50 transition`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center
            ${active ? 'bg-red-100' : 'bg-gray-100'}
          `}
        >
          {icon}
        </div>

        <div>
          <p className="font-medium text-gray-900">
            {title}
          </p>
          <p className="text-sm text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>

      <ChevronRight className="text-gray-400" />
    </button>
  )
}

function Divider() {
  return <div className="h-px bg-gray-200" />
}
