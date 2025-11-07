
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Receipt, Zap, CheckCircle2, DollarSign, Split } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Dashboard from './../../public/dashboard.png'
import Footer from "@/components/Footer";

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
      <Footer/>
    </div>
  );
}
