"use client"
import ThemeToggle from '@/components/ThemeToggle'
import { Label } from '@radix-ui/react-label'
import { Split,Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { BackgroundLines } from '@/components/ui/background-lines'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Button2 } from '@/components/ui/moving-border'
import Footer from '@/components/Footer'

const New = () => {
  const [participantsNumber, setParticipantsNumber] = React.useState(1)
  const [eventName, setEventName] = React.useState('')
  const [participants, setParticipants] = React.useState<string[]>([''])
  const [groups, setGroups] = React.useState<any[]>([])
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem('groups')
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setGroups(parsed)
      }
    } catch (e) {
      console.error('Failed to read groups from localStorage', e)
    }
  }, [])
  
  const renderParticipantInputs = () => {
    return participants.map((value, i) => (
      <div key={i} className='w-full space-y-2'>
        <Label htmlFor={`participant-${i}`} className='text-foreground'>
          Participant {i + 1}
        </Label>
        <Input
          id={`participant-${i}`}
          className='w-full'
          placeholder={`Enter person ${i + 1} name`}
          value={value}
          onChange={e => {
            const val = e.target.value
            setParticipants(prev => {
              const copy = [...prev]
              copy[i] = val
              return copy
            })
          }}
        />
      </div>
    ))
  }
  const handleAddParticipants = () => {
    setParticipantsNumber(prev => prev + 1)
    setParticipants(prev => [...prev, ''])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cleanedParticipants = participants.map(p => p.trim()).filter(p => p.length > 0)
    const group = {
      id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: eventName.trim() || 'Untitled group',
      participants: cleanedParticipants,
      createdAt: new Date().toISOString()
    }
    try {
      const raw = localStorage.getItem('groups')
      let arr: any[] = []
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) arr = parsed
      }
      arr.push(group)
      localStorage.setItem('groups', JSON.stringify(arr))
      setGroups(arr)
      // reset form
      setEventName('')
      setParticipants([''])
      setParticipantsNumber(1)
    } catch (err) {
      console.error('Failed to save group', err)
    }
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
      <form id="form" onSubmit={handleSubmit} className='container mx-auto my-10 px-6  pt-20 pb-32 border rounded-3xl  bg-card  p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-border max-w-5xl'>
        <div className='max-w-xl mx-auto flex flex-col items-center gap-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-cyan-800 text-center'>Create a new <span className='bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-3xl lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight '>splitz.</span></h1>
          <div className='w-full space-y-2'>
            <Label htmlFor='eventName' className='text-foreground'>Event Name</Label>
            <Input
              id='eventName'
              className='w-full'
              placeholder='Enter event name'
              required
              value={eventName}
              onChange={e => setEventName(e.target.value)}
            />
          </div>
          <div className='w-full space-y-4 mt-6'>
            <h2 className='text-xl font-bold text-foreground text-center'>Participants</h2>
            {renderParticipantInputs()}
            <Button type="button" onClick={handleAddParticipants}><Plus/> Add new person</Button>
          </div>
          <Button2 type="submit" className='mx-auto' variant={'destructive'}>Create splitz.</Button2>
        </div>
      </form>
      {/* Groups list section - shows saved groups from localStorage */}
      <section className='container mx-auto px-6 max-w-5xl mt-8'>
        <div className='border rounded-2xl bg-card p-6 shadow-sm'>
          <h3 className='text-xl font-semibold text-foreground text-center mb-4 bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-3xl lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight '>Saved groups</h3>
          {groups.length === 0 ? (
            <p className='text-sm text-muted-foreground text-center'>No groups found. Groups you create will be listed here.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {groups.map((g, idx) => {
                const id = g.id ?? idx
                return (
                  <Link key={id} href={`/groups/${id}`} className='p-4 rounded-xl border hover:shadow-md transition flex flex-col gap-1'>
                    <span className='font-medium text-foreground'>{g.name ?? 'Untitled group'}</span>
                    <span className='text-sm text-muted-foreground'>Participants: {Array.isArray(g.participants) ? g.participants.length : (g.participantsCount ?? '—')}</span>
                    <span className='text-xs text-muted-foreground mt-2'>View details</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
      <p className='bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-sm lg:text-sm font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mb-40'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
      
      <Footer/>
    </div>
  )
}

export default New