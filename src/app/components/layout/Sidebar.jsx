'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutGrid,
  UserCheck,
  LogOut,
} from 'lucide-react'
import { ROUTES } from '../../routes'

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const menu = [
    { name: 'Home', path: ROUTES.DASHBOARD, icon: LayoutGrid },
    { name: 'Profile', path: ROUTES.PROFILE, icon: UserCheck },
  ]

  async function handleLogout() {
    debugger
    try {
      await fetch('/api/logout', {
        method: 'POST',
      })

      // ✅ redirect to login
      router.replace('/login')
    } catch (error) {
      alert('Logout failed')
    }
  }

  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[20%] max-w-[280px] bg-white border-r border-gray-200 flex-col">
        <div className="p-6 border-b border-gray-200">
          <img src="/47329.jpg" alt="Logo" className='w-[200px] h-[40px]'/>
        </div>
        <nav className="flex-1 py-4">
          {menu.map(item => {
            const Icon = item.icon
            const active = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition
                  ${
                    active
                      ? 'bg-red-50 text-red-700 border-r-4 border-red-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <Icon
                  size={20}
                  className={active ? 'text-red-700' : 'text-gray-400'}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* LOGOUT (DESKTOP) */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around z-50">
        {menu.map(item => {
          const Icon = item.icon
          const active = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center py-2 flex-1 text-xs transition
                ${
                  active
                    ? 'text-red-700'
                    : 'text-gray-500'
                }
              `}
            >
              <Icon
                size={20}
                className={active ? 'text-red-700' : 'text-gray-400'}
              />
              <span className="mt-1">{item.name}</span>
            </Link>
          )
        })}

        {/* LOGOUT (MOBILE) */}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center justify-center py-2 flex-1 text-xs text-red-600"
        >
          <LogOut size={20} />
          <span className="mt-1">Logout</span>
        </button>
      </nav>
    </>
  )
}
