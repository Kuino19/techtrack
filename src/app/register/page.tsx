"use client"

import { useState, useTransition, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2, User, Users, FileText, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { registerStudent, getRegistrationStats, type RegistrationData } from "@/app/actions/register"

const steps = [
  { id: 1, title: "Student Info", icon: User },
  { id: 2, title: "Parent/Guardian", icon: Users },
  { id: 3, title: "Review", icon: FileText },
]

export default function RegisterPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  
  const [currentStep, setCurrentStep] = useState(1)
  const [errorMsg, setErrorMsg] = useState("")
  const [stats, setStats] = useState<{ total: number, capacity: number, freeShirtsClaimed: number, isFull: boolean, freeShirtsAvailable: boolean } | null>(null)
  
  useEffect(() => {
    getRegistrationStats().then(setStats)
  }, [])
  
  const [formData, setFormData] = useState<RegistrationData>({
    studentFirstName: "",
    studentLastName: "",
    age: 10,
    gender: "",
    school: "",
    parentName: "",
    relationship: "",
    email: "",
    phone: "",
    tShirtSize: ""
  })

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const handleInputChange = (field: keyof RegistrationData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    setErrorMsg("")
    startTransition(async () => {
      const result = await registerStudent(formData)
      if (result.error) {
        setErrorMsg(result.error)
      } else if (result.success) {
        // Redirect to success page, maybe passing the studentId
        router.push(`/success?id=${result.studentId}`)
      }
    })
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Link href="/" className="absolute top-8 left-8 text-sm font-medium text-muted-foreground hover:text-primary flex items-center transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="w-full max-w-3xl mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-center mb-2">Student Registration</h1>
        <p className="text-muted-foreground text-center mb-6">Secure your spot for the AI & Robotics Fundamentals track.</p>
        
        {stats && (
          <div className={`mb-8 p-4 rounded-xl border ${stats.isFull ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'}`}>
            {stats.isFull ? (
              <div className="flex flex-col items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <p className="text-center text-red-700 font-bold">Registration is currently full! We have reached our capacity of {stats.capacity} students.</p>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-blue-800">
                <span className="font-semibold text-base">{stats.capacity - stats.total} spots remaining!</span>
                {stats.freeShirtsAvailable ? (
                  <span className="bg-[#fcdb44] text-[#0b1221] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                    First 10 get a free shirt! ({10 - stats.freeShirtsClaimed} left)
                  </span>
                ) : (
                  <span className="text-sm opacity-80">(Free shirts claimed)</span>
                )}
              </div>
            )}
          </div>
        )}

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
        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-4 text-center text-sm font-medium border-b border-red-100">
            {errorMsg}
          </div>
        )}

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
                    <Input id="firstName" placeholder="John" value={formData.studentFirstName} onChange={(e) => handleInputChange("studentFirstName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" value={formData.studentLastName} onChange={(e) => handleInputChange("studentLastName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="8 - 16" min={8} max={16} value={formData.age} onChange={(e) => handleInputChange("age", parseInt(e.target.value) || 0)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={formData.gender} onValueChange={(v) => handleInputChange("gender", v as string)}>
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
                    <Input id="school" placeholder="Enter school name" value={formData.school} onChange={(e) => handleInputChange("school", e.target.value)} />
                  </div>
                  {stats?.freeShirtsAvailable && (
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="tShirtSize" className="flex items-center gap-2">
                        T-Shirt Size <span className="text-xs bg-[#fcdb44] text-[#0b1221] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Free Promo!</span>
                      </Label>
                      <Select value={formData.tShirtSize} onValueChange={(v) => handleInputChange("tShirtSize", v as string)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select shirt size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="extra-large">Extra Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
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
                    <Input id="parentName" placeholder="Jane Doe" value={formData.parentName} onChange={(e) => handleInputChange("parentName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship</Label>
                    <Select value={formData.relationship} onValueChange={(v) => handleInputChange("relationship", v as string)}>
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
                    <Input id="email" type="email" placeholder="jane@example.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+234 ..." value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
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
                      <p className="font-medium text-foreground">{formData.studentFirstName || "N/A"} {formData.studentLastName} ({formData.age || "N/A"})</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Parent/Guardian</p>
                      <p className="font-medium text-foreground">{formData.parentName || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{formData.email || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Program</p>
                      <p className="font-medium text-foreground">AI & Robotics Fundamentals</p>
                    </div>
                    {stats?.freeShirtsAvailable && formData.tShirtSize && (
                      <div>
                        <p className="text-muted-foreground">Free T-Shirt</p>
                        <p className="font-medium text-foreground capitalize">{formData.tShirtSize.replace('-', ' ')}</p>
                      </div>
                    )}
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
            disabled={currentStep === 1 || isPending}
            className={currentStep === 1 ? "invisible" : ""}
          >
            Previous
          </Button>
          
          {currentStep < steps.length ? (
            <Button onClick={nextStep} disabled={stats?.isFull} className="bg-blue-600 hover:bg-blue-700 text-white">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={isPending || stats?.isFull}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            >
              {isPending ? (
                <>
                  Processing...
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Submit Registration
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
