"use client"
import ThemeToggle from '@/components/ThemeToggle'
import { Label } from '@radix-ui/react-label'
import { Split,Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'

import Link from 'next/link'
import React from 'react'
import { before } from 'node:test'
import { Button } from '@/components/ui/button'
import { Button2 } from '@/components/ui/moving-border'
import Footer from '@/components/Footer'

const New = () => {
  const[participantsNumber, setParticipantsNumber]= React.useState(1)
  
  const renderParticipantInputs = () => {
    const inputs = []
    for (let i = 0; i < participantsNumber; i++) {
      inputs.push(
        <div key={i} className='w-full space-y-2'>
          <Label htmlFor={`participant-${i}`} className='text-foreground'>
            Participant {i + 1}
          </Label>
          <Input id={`participant-${i}`} className='w-full' placeholder={`Enter person ${i + 1} name`} />
          
        </div>
      )
    }
    return inputs
  }
  const handleAddParticipants = () => {
    setParticipantsNumber(prev => prev + 1)
  }
  return (
    <div className='min-h-screen bg-background'>
      <div>
        <div className='container mx-auto px-6 py-4'>
       <Link href="/" className='flex items-center gap-2 text-2xl font-bold'>
            <div className='w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center'>
              <Split className='w-6 h-6' />
            </div>
            <span className='text-foreground'>
              Splitz.
            </span>
          </Link>
      <ThemeToggle />
      </div>
        <ThemeToggle/>
      </div>
      <form id="form" className='container mx-auto my-10 px-6  pt-20 pb-32 border rounded-3xl  bg-card  p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-border max-w-5xl'>
        <div className='max-w-xl mx-auto flex flex-col items-center gap-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-cyan-800 text-center'>Create a new <span className='bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-3xl lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight '>splitz.</span></h1>
          <div className='w-full space-y-2'>
            <Label htmlFor='eventName' className='text-foreground'>Event Name</Label>
            <Input id='eventName' className='w-full' placeholder='Enter event name' required></Input>
          </div>
          <div className='w-full space-y-4 mt-6'>
            <h2 className='text-xl font-bold text-foreground text-center'>Participants</h2>
            {renderParticipantInputs()}
            <Button type="button" onClick={handleAddParticipants}><Plus/> Add new person</Button>
          </div>
          <Button2 type="submit" className='mx-auto' variant={'destructive'}>Create splitz.</Button2>
        </div>
      </form>
      <p className='bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-sm lg:text-sm font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mb-40'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
      <Footer/>
      
    </div>
  )
}

export default New