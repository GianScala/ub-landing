import React from 'react'

interface FinalCTAProps {
  onCtaClick: () => void
}

export default function FinalCTA({ onCtaClick }: FinalCTAProps) {
  return (
    <section className="py-24 px-4 bg-slate-950 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-4xl text-white font-serif italic mb-8">Ready to stop missing calls?</h2>
        <button
          onClick={onCtaClick}
          className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:scale-105 transition-transform"
        >
          Join the Waitlist
        </button>
      </div>
    </section>
  )
}