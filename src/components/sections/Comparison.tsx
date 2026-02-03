import React from 'react'
import { Check, X } from 'lucide-react'

const features = [
  'Natural, Human-Like Conversations',
  'Handles Complex Multi-Turn Dialogues',
  'Integrates With Your Existing CRM',
  'European Data Sovereignty',
  'On-Premise Deployment Option',
  'Native European Language Support',
]

export default function Comparison() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12">Not all voice AI is created equal</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Simplified Card Rendering for brevity */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
             <h3 className="text-2xl font-semibold mb-4 text-slate-400">Legacy IVR</h3>
             {features.map((f, i) => <div key={i} className="flex gap-2 text-slate-400 mb-2"><X className="w-4 h-4 text-red-300"/>{f}</div>)}
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
             <h3 className="text-2xl font-semibold mb-4 text-slate-400">US Providers</h3>
             {features.map((f, i) => <div key={i} className="flex gap-2 text-slate-400 mb-2">{i < 2 ? <Check className="w-4 h-4"/> : <X className="w-4 h-4"/>}{f}</div>)}
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-white relative">
             <h3 className="text-2xl font-semibold mb-4 text-emerald-400">SK Labs</h3>
             {features.map((f, i) => <div key={i} className="flex gap-2 text-white/90 mb-2"><Check className="w-4 h-4 text-emerald-400"/>{f}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}