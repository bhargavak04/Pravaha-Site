import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = ["Free 14-day trial", "No setup fees", "24/7 expert support", "Cancel anytime"]

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 text-center animate-on-scroll fade-in scale-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Automate Everything?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Pravāha to streamline their operations and boost productivity.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-on-scroll stagger-children delay-200">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll slide-up delay-300">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">No credit card required • Setup in under 5 minutes</p>
        </div>
      </div>
    </section>
  )
}
