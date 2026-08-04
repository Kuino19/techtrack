"use client"

import { use } from "react"
import { Certificate } from "@/components/certificate"
import { Printer, Download, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* Actions Toolbar (Hidden when printing) */}
      <div className="bg-white border-b border-slate-200 p-4 print:hidden sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/dashboard" className="text-slate-500 hover:text-slate-800 flex items-center gap-2 font-medium transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
          
          <div className="flex gap-3">
            <button 
              className="px-4 py-2 bg-white border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 text-slate-700"
            >
              <Mail className="h-4 w-4 text-blue-500" /> Email PDF
            </button>
            <button 
              onClick={handlePrint}
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Printer className="h-4 w-4" /> Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Container */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-12 print:p-0 print:block">
        
        {/* Responsive wrapper that scales down on small screens but prints full size */}
        <div className="w-full max-w-[1123px] mx-auto shadow-2xl print:shadow-none bg-white">
           <Certificate 
             studentName="Sarah Johnson"
             certificateId={resolvedParams.id}
             date="August 23, 2026"
           />
        </div>

      </main>

    </div>
  )
}
