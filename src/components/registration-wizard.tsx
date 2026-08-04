"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RegistrationWizard() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold uppercase tracking-wide text-slate-800 mb-6">Student Registration</h3>
        
        {/* Stepper */}
        <div className="flex items-center justify-between relative before:absolute before:inset-0 before:top-4 before:h-0.5 before:-translate-y-1/2 before:bg-slate-200 before:z-0 px-2 sm:px-8">
          {[
            { id: 1, title: "Student Info" },
            { id: 2, title: "Parent/Guardian Info" },
            { id: 3, title: "Additional Info" },
            { id: 4, title: "Review & Submit" }
          ].map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                {step.id}
              </div>
              <span className={`text-[10px] sm:text-xs font-semibold uppercase text-center ${currentStep >= step.id ? 'text-slate-800' : 'text-slate-400'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[250px]">
        {currentStep === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Full Name of Student <span className="text-red-500">*</span></Label>
              <Input placeholder="Enter student's full name" className="bg-slate-50 border-slate-200 h-11" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Age <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
                  <SelectValue placeholder="Select age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="13">13</SelectItem>
                  <SelectItem value="14">14</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Gender <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">School (Optional)</Label>
              <Input placeholder="Enter school name" className="bg-slate-50 border-slate-200 h-11" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Grade/Level (2025/2026) <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
                  <SelectValue placeholder="Select grade/level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jss1">JSS 1</SelectItem>
                  <SelectItem value="jss2">JSS 2</SelectItem>
                  <SelectItem value="jss3">JSS 3</SelectItem>
                  <SelectItem value="ss1">SS 1</SelectItem>
                  <SelectItem value="ss2">SS 2</SelectItem>
                  <SelectItem value="ss3">SS 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">T-Shirt Size <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s">Small</SelectItem>
                  <SelectItem value="m">Medium</SelectItem>
                  <SelectItem value="l">Large</SelectItem>
                  <SelectItem value="xl">X-Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4">
             <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Full Name <span className="text-red-500">*</span></Label>
              <Input placeholder="Enter your full name" className="bg-slate-50 border-slate-200 h-11" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Relationship to Student <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
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
              <Label className="text-xs font-semibold text-slate-600">Phone Number <span className="text-red-500">*</span></Label>
              <Input placeholder="080xxxxxxxx" className="bg-slate-50 border-slate-200 h-11" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Email Address <span className="text-red-500">*</span></Label>
              <Input placeholder="your@email.com" className="bg-slate-50 border-slate-200 h-11" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Emergency Contact (Optional)</Label>
              <Input placeholder="080xxxxxxxx" className="bg-slate-50 border-slate-200 h-11" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-600">Address <span className="text-red-500">*</span></Label>
              <Input placeholder="Enter your address" className="bg-slate-50 border-slate-200 h-11" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        {currentStep > 1 ? (
          <Button variant="outline" onClick={() => setCurrentStep(prev => prev - 1)} className="border-slate-200 text-slate-600">
            Back
          </Button>
        ) : (
          <div></div> // Placeholder to keep Next button right-aligned
        )}
        
        <Button 
          className="bg-[#0f62fe] hover:bg-[#0f62fe]/90 text-white px-8 h-11 w-full sm:w-auto"
          onClick={() => setCurrentStep(prev => Math.min(prev + 1, 4))}
        >
          {currentStep === 1 ? "Next: Parent / Guardian Info" : currentStep === 2 ? "Next: Additional Info" : "Submit"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      {currentStep === 1 && (
        <div className="mt-4 text-xs text-slate-500 flex justify-center">
          Already started? <a href="#" className="text-blue-600 font-medium ml-1">Continue Registration</a>
        </div>
      )}
    </div>
  )
}
