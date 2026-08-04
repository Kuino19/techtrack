import Image from "next/image"

interface CertificateProps {
  studentName: string;
  certificateId: string;
  date: string;
}

export function Certificate({ studentName, certificateId, date }: CertificateProps) {
  return (
    <div className="relative w-full aspect-[1.414/1] bg-white text-slate-800 shadow-2xl overflow-hidden print:shadow-none print:w-[297mm] print:h-[210mm]">
      
      {/* Background Image */}
      <Image 
        src="/images/11_certificate_background.png" 
        alt="Certificate Background" 
        fill 
        className="object-cover z-0" 
        priority
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex flex-col p-12 md:p-20 text-center">
        
        {/* Logos Header */}
        <div className="flex justify-between items-start w-full px-12 pt-8">
          <div className="relative w-24 h-12 md:w-32 md:h-16">
            <Image src="/images/foursquare_logo.png" alt="Foursquare" fill className="object-contain object-left" />
          </div>
          <div className="relative w-24 h-12 md:w-32 md:h-16">
            <Image src="/images/ai_logo.png" alt="A&I Tech" fill className="object-contain object-right" />
          </div>
        </div>

        {/* Certificate Title */}
        <div className="mt-8 md:mt-12 flex-1 flex flex-col items-center">
          <h4 className="text-[#002b5e] uppercase tracking-[0.3em] font-bold text-sm md:text-lg mb-2">
            Certificate of Completion
          </h4>
          <h1 className="text-4xl md:text-6xl font-black text-[#002b5e] font-serif mb-6 md:mb-10">
            A&I Tech Academy
          </h1>

          <p className="text-slate-500 italic text-lg md:text-xl mb-4">
            This is to certify that
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 border-b-2 border-slate-300 pb-2 px-12 mb-6">
            {studentName}
          </h2>

          <p className="text-slate-600 max-w-2xl text-sm md:text-base leading-relaxed mb-12">
            has successfully completed the intensive 2-week <strong className="text-[#002b5e]">AI & Robotics Fundamentals</strong> technology track, demonstrating exceptional skill in logic, programming, and robot assembly, hosted in partnership with Foursquare Gospel Church, Isheri.
          </p>
        </div>

        {/* Footer Signatures */}
        <div className="flex justify-between items-end w-full px-12 pb-8">
          <div className="text-center w-48">
            <div className="h-12 border-b border-slate-400 mb-2 flex items-end justify-center pb-2">
               {/* Signature Graphic Placeholder */}
               <span className="font-signature text-2xl text-slate-700 italic">David O.</span>
            </div>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">Lead Instructor</p>
            <p className="text-xs text-slate-400">A&I Tech LTD</p>
          </div>

          {/* Gold Seal / QR Code Area */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full border-4 border-[#fcdb44] bg-white shadow-lg flex items-center justify-center p-2 relative">
               <div className="absolute inset-1 border-2 border-dashed border-[#fcdb44] rounded-full"></div>
               {/* Simulated QR Code for verification */}
               <Image src="/images/13_icon_05_certificate.png" alt="Seal" width={40} height={40} className="opacity-80" />
            </div>
          </div>

          <div className="text-center w-48">
            <div className="h-12 border-b border-slate-400 mb-2 flex items-end justify-center pb-2 text-slate-700">
               {date}
            </div>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">Date Issued</p>
            <p className="text-xs text-slate-400 font-mono mt-1">ID: {certificateId}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
