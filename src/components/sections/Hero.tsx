import React from 'react'
import { ArrowRight, Check } from 'lucide-react'

interface HeroProps {
  onCtaClick: () => void
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
      {/* Background - Clean Gradients only */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-white/70 font-medium tracking-wide">
            Now accepting early partners
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6">
          <span className="italic">Your front desk,</span>
          <br />
          <span className="italic">never misses a call.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI voice agents that answer calls, book appointments, and speak your patients' language. 
          <span className="text-white/80"> Built for European healthcare. Runs on your infrastructure.</span>
        </p>
        
        <button
          onClick={onCtaClick}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10"
        >
          Join Waitlist
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          {['GDPR Compliant', 'European Servers', 'On-Premise Available'].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}