"use client"

import BasicInput from "@/components/shared/BasicInput"
import BasicSonner from "@/components/shared/BasicSonner"
import OtpInput from "@/components/shared/OtpInput"
import { Label } from "@/components/ui/label"

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-black">Home page</h1>
      <Label>Hello</Label>
      <OtpInput />

      <Label>Basic Input</Label>
      <BasicInput className="max-w-xs" />

      <div className="mt-4">
        <BasicSonner />
      </div>
    </div>
  )
}

export default Home

