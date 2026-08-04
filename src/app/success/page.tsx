import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, FileDown, ArrowRight, Calendar, MapPin, Mail, Bell } from "lucide-react"

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Simple Header */}
      <header className="bg-white border-b border-slate-100 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-10 h-10">
               <Image src="/images/foursquare_logo.png" alt="Foursquare" fill className="object-contain" />
            </div>
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <div className="relative w-16 h-8">
               <Image src="/images/ai_logo.png" alt="A&I Tech" fill className="object-contain" />
            </div>
          </Link>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest hidden sm:block">
            Secure Registration
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 lg:py-20">
        
        {/* Celebration Banner */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-10 shadow-xl border border-white">
          <Image 
            src="/images/12_registration_illustration.png" 
            alt="Registration Successful Celebration" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b5e]/90 via-[#002b5e]/40 to-transparent flex flex-col justify-end p-8 md:p-12">
            <div className="bg-emerald-500 text-white w-fit px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4 flex items-center gap-2 shadow-lg">
              <CheckCircle2 className="h-4 w-4" />
              Registration Confirmed
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              You're all set!
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Registration Details</h2>
              <p className="text-slate-500 mb-8">Please keep your reference number safe. You will need it to track attendance and access the parent portal.</p>
              
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-8">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Reference Number</div>
                <div className="text-3xl md:text-4xl font-black text-blue-700 font-mono tracking-wider">
                  VBS-26-A9F4K
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email Confirmation Sent</h4>
                    <p className="text-slate-600 text-sm mt-1">We've sent a detailed confirmation email and receipt to <strong>parent@example.com</strong>. Please check your spam folder if you don't see it.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full shrink-0">
                    <FileDown className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Registration Slip</h4>
                    <p className="text-slate-600 text-sm mt-1">Download your official registration slip. This must be presented on the first day of the programme.</p>
                    <button className="mt-3 text-emerald-600 font-semibold text-sm hover:text-emerald-700 flex items-center gap-1 group">
                      Download PDF <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0b1221] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none translate-x-4 -translate-y-4">
                 <Image src="/images/09_robot_mascot.png" alt="Mascot" fill className="object-contain" />
               </div>
               
               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Bell className="h-5 w-5 text-amber-400" />
                 Parent Checklist
               </h2>
               <ul className="space-y-4 text-blue-100">
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full border-2 border-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-blue-400 font-bold text-xs">1</div>
                   <span>Download and print the registration slip.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full border-2 border-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-blue-400 font-bold text-xs">2</div>
                   <span>Join the official WhatsApp group for parents (link in email).</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full border-2 border-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-blue-400 font-bold text-xs">3</div>
                   <span>Ensure your child arrives by 8:45 AM on August 12th.</span>
                 </li>
               </ul>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Programme Summary</h3>
              <div className="space-y-4">
                <div className="flex gap-3 text-slate-600 text-sm">
                  <Calendar className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="block font-semibold text-slate-800">August 12th - 23rd, 2026</span>
                    Mon-Fri, 9:00 AM - 1:00 PM
                  </div>
                </div>
                <div className="flex gap-3 text-slate-600 text-sm">
                  <MapPin className="h-5 w-5 text-rose-500 shrink-0" />
                  <div>
                    <span className="block font-semibold text-slate-800">Foursquare Gospel Church</span>
                    Isheri, Lagos
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/dashboard"
              className="block w-full bg-slate-900 hover:bg-slate-800 text-white text-center font-bold py-4 px-6 rounded-2xl transition-colors shadow-lg shadow-slate-900/20"
            >
              Go to Parent Portal
            </Link>
            <Link 
              href="/"
              className="block w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-center font-bold py-4 px-6 rounded-2xl transition-colors"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </main>

    </div>
  )
}
