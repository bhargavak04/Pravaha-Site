import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import IntegrationsSection from "@/components/integrations-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pravāha - Anything Automated | AI Automation & Workflow Solutions",
  description:
    "Experience unmatched AI automation with lightning-fast cloud processing. Pravāha specializes in creating workflows using n8n, Zapier, and managing CRM & ERP systems.",
  keywords: "automation, AI, workflows, n8n, Zapier, CRM, ERP, cloud processing, business automation",
  openGraph: {
    title: "Pravāha - Anything Automated",
    description: "Experience unmatched AI automation with lightning-fast cloud processing",
    type: "website",
  },
}

import ScrollAnimationProvider from "@/components/scroll-animation-provider"

export default function HomePage() {
  return (
    <ScrollAnimationProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ServicesSection />
          <IntegrationsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ScrollAnimationProvider>
  )
}
