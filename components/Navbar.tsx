import { Button } from '@/components/ui/button'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import React from 'react'
import { Split } from 'lucide-react'

function Navbar() {
  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ]
  
  return (
    <nav className='w-full fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href="/" className='flex items-center gap-2 text-2xl font-bold'>
            <div className='w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center'>
              <Split className='w-6 h-6' />
            </div>
            <span className='text-foreground'>
              Splitz.
            </span>
          </Link>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center gap-18'>
            {navItems.map((item, key) => (
              <Link 
                key={key} 
                href={item.href}
                className='text-muted-foreground hover:text-foreground transition-colors font-medium text-xl'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='flex items-center gap-3'>
            <Button asChild variant="ghost" className='hidden sm:inline-flex'>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
      <ThemeToggle/>
    </nav>
  )
}

export default Navbar