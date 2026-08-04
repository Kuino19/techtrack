import Link from "next/link"
import { LayoutDashboard, Users, CreditCard, Settings, LogOut, Bot } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/20">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Bot className="h-6 w-6 text-blue-600" />
              <span>Parent Portal</span>
            </Link>
          </div>
          <nav className="flex flex-col gap-2 px-4 py-6 font-medium text-sm">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200 px-3 py-2 transition-all">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Users className="h-4 w-4" />
              My Students
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <CreditCard className="h-4 w-4" />
              Payments
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          <div className="mt-auto p-4">
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Link>
          </div>
        </aside>

        {/* Topbar for mobile */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="sm:hidden flex items-center">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Bot className="h-6 w-6 text-blue-600" />
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <ModeToggle />
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  )
}
