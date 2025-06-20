import { Zap, Cloud, Shield, Gauge, Workflow, Bot } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Processing",
    description:
      "Experience unmatched speed with our optimized cloud infrastructure designed for rapid automation execution.",
  },
  {
    icon: Workflow,
    title: "Advanced Workflow Builder",
    description:
      "Create complex automation workflows using n8n and Zapier integrations with our intuitive visual builder.",
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Leverage artificial intelligence to make your automations smarter and more adaptive to changing conditions.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built for the cloud with scalable infrastructure that grows with your automation needs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security ensures your data and automations are protected with end-to-end encryption.",
  },
  {
    icon: Gauge,
    title: "Real-Time Monitoring",
    description: "Monitor your automations in real-time with detailed analytics and performance insights.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Powerful Features for Modern Automation
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the capabilities that make Pravāha the ultimate choice for business automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl"
              >
                {/* Glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
