import { GalleryVerticalEnd } from "lucide-react"
import { Split } from "lucide-react";
import Image from "next/image";
import LayoutTextFlip from "../../../components/ui/layout-text-flip"
import { LoginForm } from "@/components/login-form"
import signinimage from './../../../public/signin-image.jpg'
export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <Split className='w-6 h-6' />
            Splitz.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <div className="h-full flex flex-col justify-center items-center gap-4 px-8">
          <div className="flex items-center gap-2">
            <LayoutTextFlip
              text="Split Bills with"
              words={["Friends", "Roommates", "Travelers", "Groups"]}
              duration={2500}
            />
          </div>
          <p className="mt-4 text-center text-base text-muted-foreground max-w-lg text-xl">
            Track shared expenses, split bills fairly, and settle up with ease. No more awkward money conversations.
          </p>
        </div>
      </div>
    </div>
  )
}
