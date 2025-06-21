"use client"

import Image from "next/image"

const integrations = [
  { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/n8n-icon.png?height=60&width=120", category: "Workflow" },
  { name: "Zapier", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Zapier-icon.jpeg?height=60&width=120", category: "Automation" },
  { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Salesforce-icon.jpeg?height=60&width=120", category: "CRM" },
  { name: "HubSpot", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Hubspot-icon.png?height=60&width=120", category: "CRM" },
  { name: "SAP", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/SAP-icon.jpeg?height=60&width=120", category: "ERP" },
  { name: "Microsoft Dynamics", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Microsoft-Icon.jpeg?height=60&width=120", category: "ERP" },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/slack -Icon.jpeg?height=60&width=120", category: "Communication" },
  { name: "Google Workspace", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Google-Icon.jpeg?height=60&width=120", category: "Productivity" },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Notion-icon.jpeg?height=60&width=120", category: "Productivity" },
  { name: "Airtable", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/AIrtable-icon.jpeg?height=60&width=120", category: "Database" },
  { name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Stripe-Icon.jpeg?height=60&width=120", category: "Payment" },
  { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Shopify-Icon.jpeg?height=60&width=120", category: "E-commerce" },
]

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 px-4 relative">
      {/* Lightning animation effects */}
      <div className="lightning-container">
        <div className="lightning-bolt lightning-bolt-1"></div>
        <div className="lightning-bolt lightning-bolt-2"></div>
        <div className="lightning-bolt lightning-bolt-3"></div>
        <div className="lightning-bolt lightning-bolt-4"></div>
        <div className="lightning-bolt lightning-bolt-5"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll fade-in slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Connect with your favorite tools and platforms. We support hundreds of integrations to streamline your
            workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 animate-on-scroll stagger-children delay-300">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <img
                  src={integration.logo || "/placeholder.svg"}
                  alt={integration.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-medium text-sm mb-1">{integration.name}</h3>
              <p className="text-white/60 text-xs">{integration.category}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll fade-in delay-500">
          <p className="text-white/80 mb-4">{"Don't see your tool? We can integrate with any API."}</p>
          <button className="text-orange-400 hover:text-orange-300 font-medium underline">
            Request Custom Integration
          </button>
        </div>
      </div>
    </section>
  )
}
