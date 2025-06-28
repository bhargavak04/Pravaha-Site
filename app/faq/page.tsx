import Footer from "@/components/footer";
import Header from "@/components/header";
import ScrollAnimationProvider from "@/components/scroll-animation-provider";

export default function FAQPage() {
  return (
    <ScrollAnimationProvider>
      <Header />
      <main className="flex-grow">
        <section id="faq" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-on-scroll fade-in slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about automation services.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              {/* FAQ Item 1 */}
              <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-3">What is business process automation (BPA)?</h4>
                  <p className="text-gray-400 leading-relaxed">Business Process Automation (BPA) is the use of technology to automate repetitive, day-to-day tasks in a business. This can include anything from data entry and invoice processing to customer service and marketing campaigns. The goal of BPA is to streamline operations, reduce manual errors, and free up employees to focus on more strategic work.</p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-3">What are the benefits of automation for businesses?</h4>
                  <p className="text-gray-400 leading-relaxed">Automation offers numerous benefits, including increased efficiency, reduced operational costs, improved accuracy, enhanced compliance, better scalability, and freeing up human resources for more complex and creative tasks. It can also lead to faster service delivery and improved customer satisfaction.</p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-3">How can AI be integrated into automation?</h4>
                  <p className="text-gray-400 leading-relaxed">AI can be integrated into automation to create intelligent automation systems. This involves using AI technologies like machine learning, natural language processing, and computer vision to enable automation systems to learn, adapt, and make decisions. Examples include AI-powered chatbots for customer service, predictive analytics for maintenance, and intelligent document processing.</p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-3">What are some common automation tools?</h4>
                  <p className="text-gray-400 leading-relaxed">Common automation tools include Robotic Process Automation (RPA) software like UiPath and Automation Anywhere, integration platforms like Zapier and Make.com, business process management (BPM) suites, and specialized tools for marketing automation, customer relationship management (CRM), and enterprise resource planning (ERP).</p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-3">Is automation suitable for small businesses?</h4>
                  <p className="text-gray-400 leading-relaxed">Absolutely! Automation is highly beneficial for small businesses. It can help them compete with larger enterprises by optimizing limited resources, reducing operational costs, improving customer service, and enabling faster growth. Many affordable and scalable automation solutions are available for small businesses.</p>
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