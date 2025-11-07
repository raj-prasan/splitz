
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Receipt, Zap, CheckCircle2, DollarSign, Split } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Dashboard from './../../public/dashboard.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      {/* Hero Section */}
      <section id="hero" className="container mx-auto my-10 px-6  pt-20 pb-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-muted-foreground text-sm font-medium">
            <Zap className="w-4 h-4" />
            Split bills in seconds
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground max-w-4xl">
            Split Expenses with Friends, Simply
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            No more awkward money conversations. Track shared expenses, split bills fairly, and settle up with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="./signup">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="#help">See How It Works</Link>
             
            </Button>
          </div>
          
          {/* Hero Image/Illustration Placeholder */}
          <div className="w-full max-w-5xl mt-16 bg-muted/50 rounded-3xl p-8 shadow-lg backdrop-blur-sm border border-border">
            <div className="aspect-video bg-card rounded-2xl shadow-sm overflow-hidden border border-border relative">
              <Image
                src={Dashboard}
                alt="Dashboard Preview"
                fill
                className="object-cover dark:brightness-[0.7] dark:grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Splitz?
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to manage shared expenses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card rounded-2xl p-8 bg-muted/80 shadow-sm hover:shadow-md transition-shadow border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Group Expenses
            </h3>
            <p className="text-muted-foreground">
              Create groups for trips, roommates, or any shared expenses. Keep everything organized in one place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card rounded-2xl p-8 bg-muted/80 shadow-sm hover:shadow-md transition-shadow border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6">
              <Receipt className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Track Everything
            </h3>
            <p className="text-muted-foreground">
              Log expenses, add receipts, and see exactly who owes what. Complete transparency for everyone.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card rounded-2xl bg-muted/80 p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
            <div className="w-14 h-14 bg-muted bg-muted/30 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Instant Settlements
            </h3>
            <p className="text-muted-foreground">
              Settle up with integrated payment options. No more chasing friends for money.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-card rounded-2xl p-8 bg-muted/80 shadow-sm hover:shadow-md transition-shadow border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6">
              <Split className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Smart Splitting
            </h3>
            <p className="text-muted-foreground">
              Split equally, by percentage, or custom amounts. Flexible options for any situation.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-card rounded-2xl bg-muted/80 p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Multiple Currencies
            </h3>
            <p className="text-muted-foreground">
              Traveling abroad? We support multiple currencies with automatic conversion.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-card rounded-2xl bg-muted/80 p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-3">
              Always in Sync
            </h3>
            <p className="text-muted-foreground">
              Real-time updates across all devices. Everyone stays on the same page.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="help" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-sm">
              1
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Create a Group
            </h3>
            <p className="text-muted-foreground">
              Start by creating a group and inviting your friends or roommates.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-sm">
              2
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Add Expenses
            </h3>
            <p className="text-muted-foreground">
              Log expenses as they happen and split them however you like.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-sm">
              3
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Settle Up
            </h3>
            <p className="text-muted-foreground">
              See who owes what and settle balances with a single tap.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-20 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by thousands of groups worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">
              "Splitz has completely changed how our group handles travel expenses. No more spreadsheets or awkward conversations!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                SJ
              </div>
              <div>
                <p className="font-semibold text-foreground">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Travel Blogger</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">
              "Perfect for managing our roommate expenses. Everything is transparent and settling up is super easy!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                MC
              </div>
              <div>
                <p className="font-semibold text-foreground">Mike Chen</p>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground mb-6 italic">
              "The best expense splitting app I've used. Simple, intuitive, and it just works. Highly recommend!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                EP
              </div>
              <div>
                <p className="font-semibold text-foreground">Emily Parker</p>
                <p className="text-sm text-muted-foreground">Event Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center shadow-lg border border-border">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Simplify Your Shared Expenses?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have made splitting bills easier than ever.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/signup">
            Start Splitting Now
            <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Company */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/updates" className="text-muted-foreground hover:text-foreground transition-colors">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-muted-foreground hover:text-foreground transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Logo and Copyright */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                  <Split className="w-5 h-5" />
                </div>
                <span className="text-muted-foreground">
                  &copy; 2025 Splitz. All rights reserved.
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
