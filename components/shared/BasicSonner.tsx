"use client"
import { toast } from 'sonner'
import { Button } from '../ui/button'

const BasicSonner = () => {
  const showToast = () => {
    toast.promise<{ name: string }>(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Event" }), 1000)
        ),
      {
        loading: "Loading...",
        success: (data) => `${data.name} has been created`,
        error: "Error",
      }
    )
  }
  return (
    <Button
      variant="outline"
      onClick={showToast}
    >
      Show Toast
    </Button>
  )
}

export default BasicSonner