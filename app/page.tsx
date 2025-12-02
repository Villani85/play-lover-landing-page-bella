"use client"

console.log("[v0] PlayLover page loading...")

import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { SocialProof } from "@/components/social-proof"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"

export default function Home() {
  console.log("[v0] Home component rendering")

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}
