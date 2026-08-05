import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { StudentWelcome } from "@/components/student-welcome"
import { StudentDashboard } from "@/components/student-dashboard"

export default async function StudentPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const { id } = params;

  if (!id) {
    notFound();
  }

  const student = await prisma.student.findUnique({
    where: { id },
  });

  if (!student) {
    notFound();
  }

  // The event start date: August 17th, 2026 at 09:00 AM (WAT / UTC+1)
  // For simplicity, we'll use a fixed UTC date for comparison
  const startDate = new Date("2026-08-17T08:00:00Z"); // 08:00 UTC is 09:00 WAT
  const now = new Date();

  const isBeforeStart = now < startDate;

  if (isBeforeStart) {
    return <StudentWelcome studentName={student.fullName.split(' ')[0]} startDate={startDate} />;
  }

  return <StudentDashboard studentName={student.fullName.split(' ')[0]} />;
}
