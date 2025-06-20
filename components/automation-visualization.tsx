"use client"

import { useEffect, useState } from "react"
import { Calendar, MessageSquare, Database, Zap, Settings, BarChart3, Mail, User, CheckCircle } from "lucide-react"

// CSS for animations
import "../styles/automation-animations.css"

const dashboardData = {
  schedule: {
    title: "Project Meeting",
    time: "Thursday 10:00 AM-12:00 PM",
    attendees: ["John", "Sarah", "Mike"],
  },
  appointments: [
    { title: "Client appointment", day: "Friday", time: "2:00 PM" },
    { title: "Team sync", day: "Monday", time: "9:00 AM" },
  ],
  events: [
    { title: "Jogging event", day: "Saturday", status: "confirmed" },
    { title: "Project Pitch", day: "Thursday", time: "3:00 PM-5:00 PM" },
  ],
}

// Integration nodes array removed as requested
const integrationNodes = []

export default function AutomationVisualization() {
  const [activeNodes, setActiveNodes] = useState<number[]>([])
  const [processingStep, setProcessingStep] = useState(0)
  const [dataFlowActive, setDataFlowActive] = useState(false)

  useEffect(() => {
    // Main animation cycle
    const interval = setInterval(() => {
      const randomNodes = [1, 4, 6].sort(() => Math.random() - 0.5).slice(0, 2)
      setActiveNodes(randomNodes)
      setProcessingStep((prev) => (prev + 1) % 3)
      setDataFlowActive(true)

      setTimeout(() => {
        setActiveNodes([])
        setDataFlowActive(false)
      }, 1500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Dashboard Panel */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden glow-container">
        {/* Glass effect overlay with animated glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        
        {/* Animated border glow effect */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl glow-border"></div>
        
        {/* Data flow particles */}
        <div className={`data-flow-particles ${dataFlowActive ? 'active' : ''}`}></div>

        {/* Header */}
        <div className="relative p-4 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 glow-dot"></div>
              <span className="text-white text-sm font-medium">
                Arrange my schedule for upcoming 3 days for personal tasks
              </span>
            </div>
            <div className="text-gray-400 text-xs font-mono">LIVE</div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="relative p-6 space-y-6">
          {/* Project Meeting Card */}
          <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm hover-glow-card">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-semibold text-lg">{dashboardData.schedule.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{dashboardData.schedule.time}</p>
                <div className="flex items-center space-x-2 mt-3">
                  {dashboardData.schedule.attendees.map((attendee, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center pulse-avatar"
                    >
                      <User className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
          </div>

          {/* Appointments Grid */}
          <div className="grid grid-cols-2 gap-4">
            {dashboardData.appointments.map((appointment, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-3 border border-gray-600/20 data-card"
              >
                <h4 className="text-white text-sm font-medium">{appointment.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{appointment.day}</p>
                <p className="text-orange-400 text-xs font-mono">{appointment.time}</p>
              </div>
            ))}
          </div>

          {/* Events List */}
          <div className="space-y-2">
            {dashboardData.events.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-800/30 rounded-lg p-3 border border-gray-600/20 data-card"
              >
                <div>
                  <span className="text-white text-sm">{event.title}</span>
                  <p className="text-gray-400 text-xs">
                    {event.day} {event.time}
                  </p>
                </div>
                <div className="w-2 h-2 bg-orange-400 rounded-full glow-indicator"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Processing Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30 processing-indicator">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse glow-dot"></div>
            <span className="text-gray-300 text-xs font-mono">AI Processing cloud process</span>
            <div className="processing-steps">
              {[0, 1, 2].map((step) => (
                <div key={step} className={`step ${processingStep === step ? 'active' : ''}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integration Nodes section removed */}
    </div>
  )
}
