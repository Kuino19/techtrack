import Image from "next/image"
import { BrainCircuit, Bot, Code2, Activity, Lightbulb, Calendar, Users, MapPin, Target, Award, CheckCircle2, Quote, Globe, Server, ShieldCheck, CheckSquare, Settings } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { RegistrationWizard } from "@/components/registration-wizard"
import { Curriculum } from "@/components/curriculum"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Facilitators } from "@/components/facilitators"
import { Gallery } from "@/components/gallery"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { AboutSections } from "@/components/about-sections"
import { ProgrammeInfo } from "@/components/programme-info"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { HeroBackground } from "@/components/hero-background"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <HeroBackground />
          
          {/* Absolute Hero Image for Right Side */}
          <div className="absolute top-0 right-0 h-full w-full lg:w-[65%] z-10 pointer-events-none opacity-25 sm:opacity-40 lg:opacity-100 transition-opacity">
            <Image 
              src="/images/01_hero_image.png" 
              alt="Kids building robot"
              fill
              className="object-contain object-right mix-blend-multiply opacity-95"
              priority
            />
            {/* Gradient fades to ensure smooth blending with background */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent"></div>
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Column: Text & Features */}
              <div className="flex flex-col">
                <div className="inline-block bg-[#2458d3] text-white text-xs font-bold px-3 py-1 rounded-sm mb-4 self-start tracking-wider">
                  VBS TECHNOLOGY TRACK
                </div>
                
                <h1 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1] font-black text-[#0f62fe] tracking-tighter mb-0">
                  AI & ROBOTICS
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 tracking-widest mt-1 mb-4">
                  FUNDAMENTALS
                </h2>
                
                <div className="inline-block bg-[#1f3a93] text-[#fcdb44] text-xs font-bold px-4 py-1.5 rounded-full mb-6 self-start tracking-wide shadow-sm">
                  A 2-WEEK HANDS-ON LEARNING EXPERIENCE
                </div>

                <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed mb-10">
                  An exciting program designed to introduce young minds to the world of <strong className="text-blue-600">Artificial Intelligence</strong> and <strong className="text-blue-600">Robotics</strong> through creativity, innovation and faith.
                </p>

                {/* 5 Vertical Features */}
                <div className="flex flex-wrap items-start gap-4 sm:gap-6 mb-12">
                  <div className="flex flex-col items-center max-w-[80px] text-center">
                    <BrainCircuit className="h-8 w-8 text-[#0f62fe] mb-2 stroke-[1.5]" />
                    <span className="text-[9px] font-bold text-slate-800 uppercase leading-tight mb-1">AI Basics</span>
                    <span className="text-[8px] text-slate-500 leading-tight">Discover the power of Artificial Intelligence.</span>
                  </div>
                  <div className="flex flex-col items-center max-w-[80px] text-center">
                    <Bot className="h-8 w-8 text-[#0f62fe] mb-2 stroke-[1.5]" />
                    <span className="text-[9px] font-bold text-slate-800 uppercase leading-tight mb-1">Robotics</span>
                    <span className="text-[8px] text-slate-500 leading-tight">Build and program real robots.</span>
                  </div>
                  <div className="flex flex-col items-center max-w-[80px] text-center">
                    <Code2 className="h-8 w-8 text-[#0f62fe] mb-2 stroke-[1.5]" />
                    <span className="text-[9px] font-bold text-slate-800 uppercase leading-tight mb-1">Coding</span>
                    <span className="text-[8px] text-slate-500 leading-tight">Learn the logic behind code.</span>
                  </div>
                  <div className="flex flex-col items-center max-w-[80px] text-center">
                    <Activity className="h-8 w-8 text-[#0f62fe] mb-2 stroke-[1.5]" />
                    <span className="text-[9px] font-bold text-slate-800 uppercase leading-tight mb-1">Sensors</span>
                    <span className="text-[8px] text-slate-500 leading-tight">Understand how machines sense and respond.</span>
                  </div>
                  <div className="flex flex-col items-center max-w-[80px] text-center">
                    <Lightbulb className="h-8 w-8 text-[#0f62fe] mb-2 stroke-[1.5]" />
                    <span className="text-[9px] font-bold text-slate-800 uppercase leading-tight mb-1">Problem Solving</span>
                    <span className="text-[8px] text-slate-500 leading-tight">Think creatively. Solve real-world challenges.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Info Bar */}
            <div className="mt-8 border-t border-b border-slate-100 py-4 grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Duration</span>
                  <span className="text-xs font-bold text-slate-800">2 WEEKS</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Ages</span>
                  <span className="text-xs font-bold text-slate-800">8 - 16 YEARS</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Venue</span>
                  <span className="text-[10px] font-semibold text-slate-800 leading-tight">Foursquare Gospel<br/>Church, Isheri</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-blue-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Focus</span>
                  <span className="text-[10px] font-semibold text-slate-800 leading-tight">Faith + Technology<br/>Learning with Purpose</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-blue-600 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Certificate</span>
                  <span className="text-[10px] font-semibold text-slate-800 leading-tight">Certificate of Completion<br/>will be awarded</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Curriculum />
        <WhyChooseUs />
        <Facilitators />
        <Gallery />
        <FAQ />
        <Testimonials />
        <AboutSections />
        <ProgrammeInfo />
        <Contact />

        {/* REGISTRATION SECTION - DARK BLUE BACKGROUND */}
        <section className="bg-[#0b1221] py-16 text-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Side: Register Now text */}
              <div className="lg:col-span-4 flex flex-col justify-start pt-4">
                <h2 className="text-[#fcdb44] text-4xl font-bold tracking-tight mb-2 uppercase">Register Now!</h2>
                <p className="text-blue-100 text-lg mb-8 leading-snug">
                  Secure your spot and let's build the future together.
                </p>

                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-400" />
                    <span className="font-semibold tracking-wide">Limited Spaces Available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Settings className="h-6 w-6 text-[#fcdb44]" />
                    <span className="font-semibold tracking-wide">Interactive & Practical Sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-[#fcdb44]" />
                    <span className="font-semibold tracking-wide">Fun, Faith-Based Environment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-blue-400" />
                    <span className="font-semibold tracking-wide">Learn. Build. Innovate. For God's Glory!</span>
                  </li>
                </ul>

                <div className="bg-[#060b14] border border-[#1e293b] p-6 rounded-lg relative overflow-hidden">
                  <Quote className="absolute top-4 left-4 h-6 w-6 text-blue-600/50" />
                  <p className="pl-8 text-sm italic text-blue-100 mb-2 relative z-10">
                    Commit to the Lord whatever you do, and He will establish your plans.
                  </p>
                  <p className="pl-8 text-xs font-bold text-blue-400 relative z-10">— Proverbs 16:3</p>
                </div>
              </div>

              {/* Right Side: Forms and Info */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                {/* Main Registration Wizard embedded */}
                <RegistrationWizard />

                {/* About the program card */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch mt-4">
                  <div className="hidden md:block">
                    {/* Spacer for alignment if needed, design shows a secondary card here but wizard handles it */}
                  </div>
                  <div className="bg-transparent border border-blue-500/30 rounded-xl p-6 relative shadow-[0_0_15px_rgba(59,130,246,0.15)] flex flex-col justify-between overflow-hidden">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-3">About The Program</h3>
                      <p className="text-xs text-blue-100 leading-relaxed mb-6">
                        The VBS Technology Track is a faith-based technology program that empowers children and teens with future-ready skills in AI, Robotics, Coding and more.
                      </p>
                      
                      <div className="grid grid-cols-4 gap-2 mb-8">
                        <div className="flex flex-col items-center text-center gap-1">
                          <Settings className="h-5 w-5 text-[#fcdb44]" />
                          <span className="text-[7px] uppercase font-bold text-blue-100">Hands-on<br/>Projects</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-1">
                          <Users className="h-5 w-5 text-[#fcdb44]" />
                          <span className="text-[7px] uppercase font-bold text-blue-100">Expert<br/>Facilitators</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-1">
                          <Bot className="h-5 w-5 text-[#fcdb44]" />
                          <span className="text-[7px] uppercase font-bold text-blue-100">Robotics<br/>Kits</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-1">
                          <Award className="h-5 w-5 text-[#fcdb44]" />
                          <span className="text-[7px] uppercase font-bold text-blue-100">Certificate<br/>of Completion</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#fcdb44] uppercase mb-2">Questions?</h4>
                      <p className="text-xs text-blue-100 mb-1">Call/WhatsApp: +234 903 289 1384</p>
                      <p className="text-xs text-blue-100">Email: hello@goanitech.com</p>
                    </div>

                    {/* Robot Mascot corner image */}
                    <div className="absolute -bottom-4 -right-4 w-40 h-40">
                      <Image 
                        src="/images/09_robot_mascot.png" 
                        alt="Robot Mascot" 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
