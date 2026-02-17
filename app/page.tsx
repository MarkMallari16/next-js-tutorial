"use client"

import AddDialog from "@/components/shared/AddDialog"
import BasicAccordion from "@/components/shared/BasicAccordion"
import BasicInput from "@/components/shared/BasicInput"
import BasicSonner from "@/components/shared/BasicSonner"
import Navbar from "@/components/shared/Navbar"
import OtpInput from "@/components/shared/OtpInput"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

const Home = () => {


  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-black">Home page</h1>
      <Label>Hello</Label>
      <OtpInput />
      <Label>Basic Input</Label>
      <BasicInput className="max-w-xs" />
      <div className="mt-4">
        <BasicSonner />
      </div>
      <div className="m-4">
        <h1 className="text-3xl font-bold ">Frequently Asked Question?</h1>
        <BasicAccordion />
      </div>
      <AddDialog />

      <div className="flex gap-1 m-4">
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="link">Link</Badge>
        <Badge variant="destructive">Danger</Badge>

      </div>
    </div>
  )
}

export default Home

