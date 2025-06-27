"use client";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollAnimationProvider from "@/components/scroll-animation-provider";

export default function SchedulePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchCalendlyUrl();
  }, []);

  const fetchCalendlyUrl = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/schedule/calendly?action=get-calendly-url', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.url) {
        setCalendlyUrl(data.url);
        toast({
          title: "Calendly URL Loaded",
          description: "Calendly scheduling link fetched successfully.",
        });
      } else {
        throw new Error("No Calendly URL received.");
      }
    } catch (error: any) {
      console.error('Failed to fetch Calendly URL:', error);
      alert(`Failed to fetch Calendly URL: ${error.message}`);
      toast({
        title: "Calendly Error",
        description: `Failed to fetch Calendly URL: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleScheduleMeeting = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank');
    } else {
      alert("Calendly scheduling link is not available.");
    }
  };

  return (
    <ScrollAnimationProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="flex flex-col items-center justify-center w-full flex-1 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">Schedule a Meeting</h1>

            {isLoading && (
              <Alert className="mb-4 bg-gray-800 text-white border-gray-700">
                <Terminal className="h-4 w-4 text-blue-400" />
                <AlertTitle className="text-white">Loading...</AlertTitle>
                <AlertDescription className="text-gray-300">
                  Fetching Calendly scheduling link...
                </AlertDescription>
              </Alert>
            )}

            {!isLoading && calendlyUrl && (
              <div className="flex flex-col items-center gap-4">
                <p className="text-xl text-gray-300 mb-6">Seamlessly book your next meeting with us via Calendly:</p>
                <Button onClick={handleScheduleMeeting} className="mt-4 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105">
                  Schedule on Calendly
                </Button>
                <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-xl max-w-2xl mx-auto text-left">
                  <h2 className="text-2xl font-bold text-white mb-4">Why Schedule with Pravaha?</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <span className="font-semibold text-blue-300">Expert Guidance:</span> Get personalized advice from our automation specialists.
                    </li>
                    <li>
                      <span className="font-semibold text-blue-300">Tailored Solutions:</span> Discuss your specific needs and how we can help streamline your workflows.
                    </li>
                    <li>
                      <span className="font-semibold text-blue-300">No Obligation:</span> A free consultation to explore possibilities without commitment.
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-400">We look forward to connecting with you and discussing how Pravaha Automation Services can transform your business operations.</p>
                </div>
              </div>
            )}

            {!isLoading && !calendlyUrl && (
              <Alert variant="destructive" className="bg-red-800 text-white border-red-700">
                <Terminal className="h-4 w-4 text-red-400" />
                <AlertTitle className="text-white">Error</AlertTitle>
                <AlertDescription className="text-red-200">
                  Could not load Calendly scheduling link. Please check your configuration.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </ScrollAnimationProvider>
  );
}