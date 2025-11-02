import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";
import { RocketIcon, BellIcon, MailIcon, ArrowRightIcon } from "lucide-react";

export const metadata = {
  title: "Coming Soon - Garida Express",
  description: "Garida Express is launching soon. Sign up to be notified when we go live.",
};

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <WebNavbar />

      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="animate-fadeIn mx-auto max-w-4xl space-y-8 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="bg-primary absolute inset-0 animate-pulse rounded-full opacity-20 blur-2xl"></div>
              <div className="bg-primary relative rounded-full p-6">
                <RocketIcon className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="animate-fadeIn bg-primary bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Coming Soon
            </h1>
            <p className="animation-delay-200 animate-fadeIn mx-auto max-w-2xl text-xl text-gray-600 md:text-2xl dark:text-gray-400">
              We're working hard to bring you the best express delivery service. Get ready for something amazing!
            </p>
          </div>

          {/* Features Preview */}
          <div className="animation-delay-400 animate-fadeIn mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 dark:border-red-800 dark:from-red-950 dark:to-red-900">
              <RocketIcon className="mx-auto mb-3 h-8 w-8 text-red-600 dark:text-red-400" />
              <h3 className="mb-2 text-lg font-semibold">Fast Delivery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Lightning-fast delivery to your doorstep</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
              <BellIcon className="mx-auto mb-3 h-8 w-8 text-slate-900 dark:text-slate-400" />
              <h3 className="mb-2 text-lg font-semibold">Real-time Tracking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Track your packages in real-time</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 dark:border-red-800 dark:from-red-950 dark:to-red-900">
              <MailIcon className="mx-auto mb-3 h-8 w-8 text-red-700 dark:text-red-400" />
              <h3 className="mb-2 text-lg font-semibold">Reliable Service</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by thousands of customers</p>
            </div>
          </div>

          {/* Email Subscription Form */}
          <div className="animation-delay-600 animate-fadeIn mt-16">
            <div className="mx-auto max-w-md space-y-4">
              <h2 className="text-2xl font-semibold">Get Early Access</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Be the first to know when we launch. Sign up for early access!
              </p>
              <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" required />
                <Button
                  type="submit"
                  size="lg"
                  className="group cursor-pointer px-8 text-base shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Notify Me
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                We'll never share your email. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="animation-delay-800 animate-fadeIn mt-12">
            <Link href="/">
              <Button variant="outline" className="cursor-pointer">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <WebFooter />
    </div>
  );
}
