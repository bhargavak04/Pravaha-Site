"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Integrations", href: "#integrations" },
    { name: "Resources", href: "#resources" },
    { name: "Support", href: "#support" },
  ]

  return (
    <header className="relative z-50 w-full">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with glow animation */}
          <Link href="/" className="flex items-center space-x-2 logo-container">
            <div className="w-8 h-8 rounded-lg relative logo-glow-container">
              <img 
                src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Pravahaicon2.png" 
                alt="Pravaha Logo" 
                className="w-full h-full object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-lg blur-md logo-glow-effect"></div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold tracking-tight glow-text">Pravāha</div>
              <div className="text-xs tracking-[0.2em] text-orange-200 uppercase shimmer-text">Anything Automated</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 glow-button-outline">
              Sign Up
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 glow-button-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-800">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-6">
                  <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 glow-button-outline">
                    Sign Up
                  </Button>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 glow-button-primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
