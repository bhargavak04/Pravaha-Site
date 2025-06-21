import { Database, Workflow, Settings, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Create sophisticated automation workflows using industry-leading platforms like n8n and Zapier.",
    features: ["Visual workflow builder", "Custom triggers and actions", "Multi-step automation", "Error handling"],
  },
  {
    icon: Database,
    title: "CRM & ERP Integration",
    description: "Seamlessly connect and automate your CRM and ERP systems for streamlined business operations.",
    features: ["Salesforce integration", "HubSpot automation", "SAP connectivity", "Custom ERP solutions"],
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Connect disparate systems and applications to create a unified, automated business ecosystem.",
    features: ["API integrations", "Database synchronization", "Real-time data flow", "Legacy system support"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Gain insights into your automation performance with comprehensive analytics and reporting.",
    features: ["Performance metrics", "Custom dashboards", "Automated reports", "ROI tracking"],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll fade-in slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Comprehensive Automation Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From workflow creation to system integration, we provide end-to-end automation solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 animate-on-scroll stagger-children delay-200">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl"
              >
                {/* Glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-2xl pointer-events-none"></div>

                <div className="relative flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/25">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
