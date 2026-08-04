"use client"

import { useState } from "react"
import { ScanLine, CheckCircle2, XCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ScannerPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  
  // Mock scan function
  const handleScan = () => {
    setStatus("success")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">QR Attendance Scanner</h1>
        <p className="text-muted-foreground mt-2">Scan student passes to mark daily attendance.</p>
      </div>

      <Card className="w-full">
        <CardHeader className="text-center pb-2">
          <CardTitle>Camera Scanner</CardTitle>
          <CardDescription>Position the QR code within the frame.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-md bg-black rounded-lg overflow-hidden flex items-center justify-center mb-6 border-4 border-muted">
            <ScanLine className="w-16 h-16 text-muted-foreground animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-1/2 animate-[scan_2s_ease-in-out_infinite] border-b-2 border-blue-500"></div>
          </div>
          
          <div className="w-full flex items-center gap-2 max-w-md">
            <Input placeholder="Or enter manual registration ID..." />
            <Button onClick={handleScan}>Submit</Button>
          </div>

          {status === "success" && (
            <div className="mt-6 flex items-center gap-3 text-green-600 bg-green-600/10 p-4 rounded-lg w-full max-w-md">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div>
                <p className="font-semibold">Attendance Recorded</p>
                <p className="text-sm">John Doe (AI & Robotics Fundamentals)</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 flex items-center gap-3 text-destructive bg-destructive/10 p-4 rounded-lg w-full max-w-md">
              <XCircle className="w-6 h-6 shrink-0" />
              <div>
                <p className="font-semibold">Invalid Pass</p>
                <p className="text-sm">This QR code is not valid for today's session.</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
