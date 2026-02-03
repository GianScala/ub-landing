import React from 'react'
import { Shield, Database, Globe } from 'lucide-react'

const differentiators = [
  {
    icon: Shield,
    title: 'Your Patients, Your Data',
    description: 'On-premise deployment option. Patient data never leaves your servers. Full GDPR compliance built-in.',
  },
  {
    icon: Database,
    title: 'Plugs Into Your Systems',
    description: 'Seamless integration with your existing CRMs, scheduling tools, and patient databases.',
  },
  {
    icon: Globe,
    title: 'Built for European Languages',
    description: 'Native support for Italian, French, Spanish, Portuguese, German and more. Localized, not just translated.',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium text-sm tracking-wide uppercase">Why SK Labs</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mt-4 mb-6">Voice AI that respects your clinic</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}