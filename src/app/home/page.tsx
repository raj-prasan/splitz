import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import howtodo from './../../../public/how-it-works.jpg'
import howtodo2 from './../../../public/how-it-works2.jpg'
import howtodo3 from './../../../public/how-it-works3.jpg'
import howtodo4 from './../../../public/howitworks4.jpg'
import howtodo5 from './../../../public/howitworks5.jpg'

import { Button } from '@/components/ui/button'
import { Split, Zap, Users} from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import Footer from '@/components/Footer'

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
          <Button asChild size="lg" variant="default"><Link  href="./new">Start Now</Link></Button>
        </div>
        
      </section >

      <section id='how-to-do' className='bg-muted/30 py-20'>
        <div className='container mx-auto px-6'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
              How It Works
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Splitting bills has never been this simple. See how Splitz makes group expenses effortless.
            </p>
          </div>

          {/* Step 1 */}
          <div className="mb-20">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">1</span>
                    Getting Started
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">Smartly manage debts between friends</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    <span className='font-bold text-primary text-xl'>Splitz</span> is the easiest way to share bills with friends. 
                    No registration required, completely free, and incredibly simple to use.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                    <Image src={howtodo} alt='how it works' className="w-full h-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-20">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">2</span>
                    Example Scenario
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">Here's an example</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Jack, Jane and John go on a skiing weekend together. Jack pays for the ski-hire, 
                    Jane covers the hotel, and John takes care of dinner. Simple activities, complex splitting—until now.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                    <Image src={howtodo2} alt='example scenario' className="w-full h-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-20">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">3</span>
                    Add Expenses
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">Now who owes what?</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Jack creates a group on Splitz and adds expenses one at a time. 
                    Each expense is tracked with who paid and who should split it.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                    <Image src={howtodo3} alt='add expenses' className="w-full h-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-20">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">4</span>
                    Share & Collaborate
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">Sharing the Splitz</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Once finished, Jack sends a link to the group. John and Jane can view all expenses, 
                    add their own, and see the complete picture in real-time.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                    <Image src={howtodo4} alt='share and collaborate' className="w-full h-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">5</span>
                    Final Step
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">Settling up</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Everyone can see exactly how much they owe and to whom. 
                    Settle up easily and get back to enjoying life with your friends.
                  </p>
                  
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                    <Image src={howtodo5} alt='settle up' className="w-full h-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home