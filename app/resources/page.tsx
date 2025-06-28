import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollAnimationProvider from "@/components/scroll-animation-provider";

export default function ResourcesPage() {
  return (
    <ScrollAnimationProvider>
      <Header />
      <main className="flex-grow">
        <section id="resources" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-on-scroll fade-in slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"> Resources Hub</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guides, tutorials, and insights to accelerate your automation journey
              </p>
            </div>

            {/* Featured Video Section */}
            <div className="mb-20 animate-on-scroll fade-in slide-up">
              <h3 className="text-3xl font-bold text-white mb-8 text-center"> Featured Tutorial</h3>
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl pointer-events-none"></div>
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-black/50">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/1p5kI7SYz4Q?si=iPNlf86XTK2fQIcZ"
                        title="Business Process Automation Complete Guide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-2xl"
                      ></iframe>
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-3">Complete Guide to Business Process Automation</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Learn the fundamentals of automation, from identifying processes to implementation strategies that can transform your business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Tutorials Grid */}
            <div className="mb-20 animate-on-scroll stagger-children">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Video Tutorials</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="aspect-video bg-black/50">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/oy0rNTGEagQ?si=Fs3knM5NG_fpPkpr"
                      title="Zapier Automation Tutorial"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Getting Started with Zapier</h4>
                    <p className="text-gray-400 text-sm">Build your first automation workflow in under 10 minutes</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="aspect-video bg-black/50">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/J65jl2T_Doc?si=VzlbaHLuhsf_Bz-x" 
                      title="WhatsApp Business Automation"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">WhatsApp Business Automation</h4>
                    <p className="text-gray-400 text-sm">Automate customer communications and lead nurturing</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="aspect-video bg-black/50">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/7ons5SrfyWY?si=C2391vkl0Jqvvr4s"
                      title="AI Email Automation"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Email Workflows</h4>
                    <p className="text-gray-400 text-sm">Smart email responses and customer service automation</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Guides & Resources */}
            <div className="mb-20 animate-on-scroll stagger-children">
              <h3 className="text-3xl font-bold text-white mb-8 text-center"> Comprehensive Guides</h3>
              <div className="grid md:grid-cols-2 gap-8">
                
                <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3"></span>
                      <h4 className="text-2xl font-semibold text-white tracking-tight">Automation Fundamentals</h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">Master the basics of business process automation with our comprehensive starter guides.</p>
                    <div className="space-y-3">
                      <a href="https://www.acronis.com/en-us/blog/posts/business-process-automation/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-400 hover:text-orange-500 transition-colors duration-200 group">
                        <img src="/logos/Business-Automation-Tools.jpg" alt="Business Automation Tools" className="w-6 h-6 object-contain mr-3" />
                        Business Process Automation: Complete Guide for 2024
                      </a>
                      <a href="https://www.flowforma.com/blog/business-process-automation" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-400 hover:text-orange-500 transition-colors duration-200 group">
                        <img src="/logos/Automation tools.png" alt="Automation Tools" className="w-6 h-6 object-contain mr-3" />
                        Business Process Automation: Complete Guide 2025
                      </a>
                      <a href="https://imaginovation.net/blog/business-process-automation-guide/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-400 hover:text-orange-500 transition-colors duration-200 group">
                        <img src="/logos/Business-Automation-Tools.jpg" alt="Business Automation Tools" className="w-6 h-6 object-contain mr-3" />
                        Complete Guide to Business Process Automation 2025
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3"></span>
                      <h4 className="text-2xl font-semibold text-white tracking-tight">AI Integration</h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">Learn how to integrate AI into your workflows for smarter automation solutions.</p>
                    <div className="space-y-3">
                      <a href="https://www.salesforce.com/service/ai/customer-service-ai/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-400 hover:text-orange-500 transition-colors duration-200 group">
                        <img src="/logos/Customer-Service.png" alt="Customer Service" className="w-6 h-6 object-contain mr-3" />
                        AI in Customer Service: Everything You Need to Know
                      </a>
                      <a href="https://blog.hubspot.com/service/state-of-ai-in-service" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-400 hover:text-orange-500 transition-colors duration-200 group">
                        <img src="/logos/Customer-Service.png" alt="Customer Service" className="w-6 h-6 object-contain mr-3" />
                        AI in Customer Service: 11 Ways to Use it [2024 Data]
                      </a>
                      <a href="https://aisera.com/blog/automated-customer-service/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-400 hover:text-orange-500 transition-colors duration-200 group">
                        <img src="/logos/Customer-Service.png" alt="Customer Service" className="w-6 h-6 object-contain mr-3" />
                        Customer Service Automation: Complete Guide 2024
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="mb-20 animate-on-scroll fade-in slide-up">
              <h3 className="text-3xl font-bold text-white mb-8 text-center"> Recommended Tools & Platforms</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 shadow-xl hover:scale-105">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Zapier-icon.jpeg" alt="Zapier Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Zapier</h4>
                    <p className="text-gray-400 text-sm">Connect 5000+ apps</p>
                  </div>
                </a>

                <a href="https://www.make.com" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 shadow-xl hover:scale-105">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/make_logo.png" alt="Make.com Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Make.com</h4>
                    <p className="text-gray-400 text-sm">Visual automation</p>
                  </div>
                </a>

                <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 shadow-xl hover:scale-105">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <img src="/placeholder-logo.png" alt="Twilio Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Twilio</h4>
                    <p className="text-gray-400 text-sm">Communication APIs</p>
                  </div>
                </a>

                <a href="https://www.airtable.com" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 shadow-xl hover:scale-105">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/AIrtable-icon.jpeg" alt="Twilio Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Airtable</h4>
                    <p className="text-gray-400 text-sm">Database automation</p>
                  </div>
                </a>

              </div>
            </div>

            {/* Blog & Insights */}
            <div className="mb-20 animate-on-scroll stagger-children">
              <h3 className="text-3xl font-bold text-white mb-8 text-center"> Latest Insights & Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <article className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="relative">
                    <div className="w-full rounded-lg mb-4 overflow-hidden">
                      <img src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Business-Automation-Tools.jpg" alt="Business Automation Tools" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">The Future of Small Business Automation</h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">Explore emerging trends and technologies that will shape how SMEs leverage automation in the coming years.</p>
                    <a href="https://www.flowforma.com/blog/business-process-automation-trends" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 transition-colors duration-200 font-medium">
                      Read More →
                    </a>
                  </div>
                </article>

                <article className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="relative">
                    <div className="w-full rounded-lg mb-4 overflow-hidden">
                      <img src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Customer-Service.png" alt="Customer Service" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">AI Customer Service Revolution</h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">How artificial intelligence is transforming customer support and creating better experiences for both businesses and customers.</p>
                    <a href="https://www.zendesk.com/blog/ai-customer-service/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 transition-colors duration-200 font-medium">
                      Read More →
                    </a>
                  </div>
                </article>

                <article className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="relative">
                    <div className="w-full rounded-lg mb-4 overflow-hidden">
                      <img src="https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Automation tools.png" alt="Automation Tools" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Essential Automation Tools 2024</h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">A comprehensive review of the best automation tools and platforms that every business should consider this year.</p>
                    <a href="https://zapier.com/blog/best-automation-tools/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500 transition-colors duration-200 font-medium">
                      Read More →
                    </a>
                  </div>
                </article>

              </div>
            </div>

            {/* FAQ Section */}
            <div className="animate-on-scroll fade-in slide-up">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">❓ Frequently Asked Questions</h3>
              <div className="max-w-4xl mx-auto">
                <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="relative text-center">
                    <h4 className="text-2xl font-semibold text-white mb-4">Need Quick Answers?</h4>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Find answers to common questions about automation implementation, pricing, integrations, and our consultation process.
                    </p>
                    <a 
                      href="/faq" 
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span className="mr-2">📋</span>
                      Visit FAQ Page
                    </a>
                    <p className="text-gray-500 text-sm mt-4">
                      Can't find what you're looking for? Contact us directly and we'll respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}