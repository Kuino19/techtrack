"use server"

import prisma from "@/lib/prisma"
import { sendRegistrationConfirmation } from "@/lib/email"

export type RegisterState = {
  success?: boolean
  error?: string
  studentId?: string
}

export type RegistrationData = {
  studentFirstName: string
  studentLastName: string
  age: number
  gender: string
  school: string
  parentName: string
  relationship: string
  email: string
  phone: string
  tShirtSize?: string
}

export async function registerStudent(data: RegistrationData): Promise<RegisterState> {
  try {
    const {
      studentFirstName,
      studentLastName,
      age,
      gender,
      school,
      parentName,
      relationship,
      email,
      phone,
      tShirtSize
    } = data

    // Validate inputs
    if (!studentFirstName || !studentLastName || !age || !parentName || !email || !phone) {
      return { error: "Please fill in all required fields." }
    }

    // Check capacity limit
    const currentRegistrationsCount = await prisma.registration.count()
    if (currentRegistrationsCount >= 30) {
      return { error: "Registration is full! We have reached our 30-student capacity limit." }
    }
    const receivesFreeShirt = currentRegistrationsCount < 10

    // Upsert Default Event for the Registration
    const event = await prisma.event.upsert({
      where: { id: "default-vbs-2026" },
      update: {},
      create: {
        id: "default-vbs-2026",
        name: "AI & Robotics Fundamentals 2026",
        startDate: new Date("2026-08-15"),
        endDate: new Date("2026-08-30"),
      }
    })

    // Transaction to create Parent, Student, and Registration
    const registration = await prisma.$transaction(async (tx: any) => {
      // 1. Upsert Parent (User)
      const parent = await tx.user.upsert({
        where: { email },
        update: {
          name: parentName,
          phoneNumber: phone,
        },
        create: {
          email,
          name: parentName,
          phoneNumber: phone,
          role: "PARENT",
        }
      })

      // 2. Create Student
      const student = await tx.student.create({
        data: {
          parentId: parent.id,
          fullName: `${studentFirstName} ${studentLastName}`.trim(),
          age,
          gender: gender || "Not Specified",
          school: school || null,
          gradeLevel: "N/A", // Not in form
          tShirtSize: receivesFreeShirt ? (tShirtSize || "Not Specified") : "N/A",
          relationship,
        }
      })

      // 3. Create Registration
      const reg = await tx.registration.create({
        data: {
          studentId: student.id,
          eventId: event.id,
          status: "PENDING",
          receivesFreeShirt,
        }
      })

      return reg
    })

    // Send Welcome Email
    await sendRegistrationConfirmation(email, `${studentFirstName} ${studentLastName}`.trim())

    return { success: true, studentId: registration.studentId }
  } catch (error: any) {
    console.error("Registration error:", error)
    return { error: error?.message || "An unexpected error occurred during registration." }
  }
}

export async function getRegistrationStats() {
  try {
    const count = await prisma.registration.count()
    return {
      total: count,
      capacity: 30,
      freeShirtsClaimed: Math.min(count, 10),
      isFull: count >= 30,
      freeShirtsAvailable: count < 10,
    }
  } catch (error) {
    console.error("Error fetching registration stats:", error)
    return { total: 0, capacity: 30, freeShirtsClaimed: 0, isFull: false, freeShirtsAvailable: true }
  }
}

