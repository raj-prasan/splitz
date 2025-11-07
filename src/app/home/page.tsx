import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Split, Zap} from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='w-full fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
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
      </div>

      {/*hero */}
      <section id="hero" className='container mx-auto my-10 px-6  pt-20 pb-32'>
        <div className='flex flex-col items-center text-center space-y-8'>
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-muted-foreground text-sm font-medium">
            <Zap className="w-4 h-4" />
            Split bills in seconds
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 max-w-4xl">
            Easy splitting of group expenses
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">The simplest way to calculate who owes what</p>
          <Button size="lg" variant="default">Start Now</Button>
        </div>
        
      </section>
    </div>
  )
}

export default Home