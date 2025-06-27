"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AutomationVisualization from "@/components/automation-visualization"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-black via-gray-900 to-orange-900/20">
      {/* Sharp geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-transparent rotate-45 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-red-500/5 to-transparent rotate-12 blur-2xl"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-on-scroll slide-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Experience Unmatched{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                AI Automation
              </span>{" "}
              With Seamless Workflow Orchestration
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Automate repetitive tasks, optimize workflows, and accelerate operations with AI-powered systems built for speed and scalability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 h-14 text-base shadow-2xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-600 text-white hover:bg-white/5 px-8 py-4 h-14 text-base backdrop-blur-sm"
              >
                <Link href="/schedule" passHref>
                  Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Automation Visualization */}
          <div className="relative animate-on-scroll slide-right delay-300">
            <AutomationVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}