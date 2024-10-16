import Link from 'next/link'
import { ArrowUpRight, Monitor, Menu } from 'lucide-react'

export default function TicketPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 space-y-4 sm:space-y-0">
        <div className="text-xl font-bold">Next.js <span className="text-sm bg-white text-black px-1">CONF24</span></div>
        <nav className="flex flex-wrap justify-center items-center space-x-4">
          <span className="hidden sm:inline">NEXT.JS ON</span>
          <span className="hidden sm:inline transform rotate-45 text-2xl">▲</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">LOG IN</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">GET TICKETS</button>
          <button className="sm:hidden"><Menu /></button>
        </nav>
      </header>

      <main className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-12 lg:py-24 space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Dinesh's<br />Ticket</h1>
          <p className="text-lg sm:text-xl">See you on October 17th.</p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded">GET TICKETS</button>
        </div>

        <div className="relative w-full max-w-sm lg:w-96 h-[400px] sm:h-[500px] perspective-1000">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl shadow-2xl transform rotate-y-10 backface-hidden">
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-blue-700 rounded-t-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-blue-700 rounded-b-2xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMzQ4OGZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzZDVhZmYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
            <div className="absolute top-6 left-6 right-6 space-y-4">
              <div className="text-xl sm:text-2xl font-bold">Next.js <span className="text-sm bg-white text-blue-600 px-1 rounded">C24</span></div>
              <div className="text-3xl sm:text-4xl font-bold">Dinesh<br />Babu</div>
              <div className="text-sm">NOTHING</div>
              <div className="text-xl sm:text-2xl font-bold">OCTOBER 17TH</div>
              <div className="flex items-center">
                <Monitor className="mr-2" />
                <span>VIRTUAL</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs sm:text-sm font-mono">TICKET ID: NEXT-CONF-24-001</div>
            </div>
            <div className="absolute top-1/2 -right-4 w-8 h-16 bg-black rounded-l-full"></div>
            <div className="absolute top-1/2 -left-4 w-8 h-16 bg-black rounded-r-full"></div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 flex flex-col sm:flex-row justify-between items-center p-4 text-xs sm:text-sm space-y-2 sm:space-y-0 bg-black bg-opacity-80">
        <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
          <Link href="#" className="flex items-center">
            GET A DEMO <ArrowUpRight className="ml-1" size={14} />
          </Link>
          <Link href="#" className="flex items-center">
            PRIVACY POLICY <ArrowUpRight className="ml-1" size={14} />
          </Link>
          <Link href="#" className="flex items-center">
            EVENT TERMS & COND. <ArrowUpRight className="ml-1" size={14} />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">© 2024 NEXT.JS - ALL RIGHTS RESERVED</span>
          <Link href="#"><ArrowUpRight size={14} /></Link>
          <Link href="#"><ArrowUpRight size={14} /></Link>
          <button className="w-6 h-6 bg-white rounded-full"></button>
        </div>
      </footer>
    </div>
  )
}