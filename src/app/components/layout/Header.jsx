'use client'

import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header className="hidden lg:flex sticky top-0 z-30 h-16 w-full items-center justify-between bg-white border-b border-gray-200 px-6">
        <h1 className="text-lg font-semibold text-red-700">
          JANASENA PARTY
        </h1>

        <NotificationBell />
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header className="lg:hidden sticky top-0 z-30 h-14 w-full flex items-center justify-between bg-white border-b border-gray-200 px-4">
        <h1 className="text-base font-semibold text-red-700">
          JANASENA PARTY
        </h1>

        <NotificationBell />
      </header>
    </>
  )
}

/* ---------- Reusable Bell ---------- */

function NotificationBell() {
  return (
    <div className="relative">
      <button
        className="p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5 text-gray-700" />
      </button>

      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
    </div>
  )
}
