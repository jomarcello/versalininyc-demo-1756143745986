'use client';

import { getCurrentPractice } from '@/lib/practice-config';
import { Phone, Mic, Calendar, Clock, Star, CheckCircle, Users, MessageSquare, Zap, Shield } from 'lucide-react';

export default function AIVoiceAgentDemo() {
  const practice = getCurrentPractice();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{practice.name}</h1>
                <p className="text-sm text-gray-600">AI Voice Agent Demo</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Live Demo</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Interactive Demo Presentation
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Meet Robin: Your AI <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Appointment Assistant</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Experience how <strong>Robin</strong> handles patient calls with human-like conversations, schedules appointments instantly, 
            and answers questions about {practice.name} services - completely automated, 24/7.
          </p>
        </div>

        {/* Live Demo Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Live Demo - Try Robin Now</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Click below to experience exactly what your patients will hear when they call {practice.name}. 
              Robin knows about all {practice.services.length} of your {practice.type} services and {practice.doctor}'s expertise.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Call {practice.name}
              </h2>
              <p className="text-gray-600 mt-2">
                Experience how patients will interact with your AI {practice.type} assistant. 
                Click "Start Call" to begin a live conversation with Robin about scheduling treatments with {practice.doctor}.
              </p>
            </div>

            <div className="text-center mb-6">
              <button className="relative inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <Phone className="w-6 h-6" />
                Start Call
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">Robin Knows All Your Treatments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practice.services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in AI Solutions for {practice.name}?</h2>
          <p className="text-xl text-blue-100 mb-2">You've seen how Robin handles patient calls perfectly</p>
          <p className="text-lg text-blue-200 mb-8">
            Let's explore how AI can help transform your practice's patient experience
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-2">
            {practice.name} AI Voice Agent Demo - Experience the Future of {practice.type.charAt(0).toUpperCase() + practice.type.slice(1)} Scheduling
          </p>
          <p className="text-gray-400">
            {practice.doctor} • Powered by AI Technology
          </p>
        </div>
      </footer>
    </div>
  );
}