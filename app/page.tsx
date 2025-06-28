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
          <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll fade-in slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"> How it Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll stagger-children">
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Step 1: Identify Your Automation Needs</h3>
                <p className="text-gray-400 leading-relaxed">We start by understanding your business goals and bottlenecks. Whether it’s automating lead outreach, data scraping, CRM updates, or daily operational tasks – we analyse your existing workflows to pinpoint automation opportunities.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Step 2: Design & Prototype Solutions</h3>
                <p className="text-gray-400 leading-relaxed">Our team designs tailored automation solutions aligned with your processes. We create flow diagrams and quick prototypes to ensure transparency and alignment before deployment.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Step 3: Develop & Integrate</h3>
                <p className="text-gray-400 leading-relaxed">We build and deploy robust automation workflows using advanced tools such as AI models, APIs, and RPA frameworks. Integrations are configured seamlessly with your current systems to ensure zero disruption.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Step 4: Test & Optimise</h3>
                <p className="text-gray-400 leading-relaxed">Every automation is rigorously tested under real-world scenarios. We continuously monitor and fine-tune processes to maximise efficiency, reliability, and ROI.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Step 5: Scale & Support</h3>
                <p className="text-gray-400 leading-relaxed">As your business grows, we help scale your automations effortlessly. Our ongoing support ensures your workflows remain updated and adaptive to your evolving needs.</p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative">
                <p className="text-xl font-bold text-center text-white"> Result: Save time, reduce manual errors, and empower your teams to focus on high-impact work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
          <IntegrationsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ScrollAnimationProvider>
  )
}
