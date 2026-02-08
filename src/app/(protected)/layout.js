import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"

export default function ProtectedLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div
        className="
          flex flex-col min-h-screen flex-1
          lg:ml-[20%] lg:max-w-[calc(100%-20%)]
        "
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main
          className="
            flex-1 overflow-y-auto bg-gray-50
            p-4 sm:p-6
            pt-14 lg:pt-6
            pb-16 lg:pb-0
          "
        >
          {children}
        </main>
      </div>

    </div>
  )
}
