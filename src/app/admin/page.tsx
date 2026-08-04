import prisma from "@/lib/prisma"
import { DashboardClient } from "@/components/admin/dashboard-client"

// This page is a Server Component. It fetches data dynamically on every request.
export const dynamic = "force-dynamic"

export default async function AdminDashboardPage() {
  // Fetch all students, along with their parent details and registration status.
  const students = await prisma.student.findMany({
    include: {
      parent: {
        select: {
          name: true,
          email: true,
        },
      },
      registrations: {
        select: {
          status: true,
          receivesFreeShirt: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return <DashboardClient students={students} />
}
