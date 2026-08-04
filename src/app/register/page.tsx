"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2, User, Users, FileText } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const steps = [
  { id: 1, title: "Student Info", icon: User },
  { id: 2, title: "Parent/Guardian", icon: Users },
  { id: 3, title: "Review", icon: FileText },
]

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Link href="/" className="absolute top-8 left-8 text-sm font-medium text-muted-foreground hover:text-primary flex items-center transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="w-full max-w-3xl mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-center mb-2">Student Registration</h1>
        <p className="text-muted-foreground text-center mb-8">Secure your spot for the AI & Robotics Fundamentals track.</p>
        
        {/* Stepper */}
        <div className="flex items-center justify-between relative before:absolute before:inset-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-muted before:z-0">
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-muted/30 px-2 sm:px-4">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors ${currentStep >= step.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-background border-muted-foreground text-muted-foreground'}`}>
                {currentStep > step.id ? <CheckCircle2 className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
              </div>
              <span className={`text-xs sm:text-sm font-medium ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Card className="w-full max-w-3xl border-muted/50 shadow-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div className="p-6 sm:p-10">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Student Information</CardTitle>
                  <CardDescription>Tell us about the attendee.</CardDescription>
                </CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="8 - 16" min={8} max={16} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="school">School (Optional)</Label>
                    <Input id="school" placeholder="Enter school name" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="p-6 sm:p-10">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Parent / Guardian Information</CardTitle>
                  <CardDescription>We'll use this to send updates and the final certificate.</CardDescription>
                </CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Full Name</Label>
                    <Input id="parentName" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+234 ..." />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="p-6 sm:p-10">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Review & Submit</CardTitle>
                  <CardDescription>Please review the information before submitting.</CardDescription>
                </CardHeader>
                <div className="space-y-6 rounded-lg bg-muted/50 p-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Student Name</p>
                      <p className="font-medium text-foreground">John Doe (12)</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Parent/Guardian</p>
                      <p className="font-medium text-foreground">Jane Doe</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">jane@example.com</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Program</p>
                      <p className="font-medium text-foreground">AI & Robotics Fundamentals</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        <CardFooter className="flex justify-between border-t p-6 sm:px-10 bg-muted/10">
          <Button 
            variant="ghost" 
            onClick={prevStep} 
            disabled={currentStep === 1}
            className={currentStep === 1 ? "invisible" : ""}
          >
            Previous
          </Button>
          
          {currentStep < steps.length ? (
            <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              Submit Registration
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
