'use client'

import React, { useState } from 'react'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Comparison from '@/components/sections/Comparison'
import Demo from '@/components/sections/Demo'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'
import WaitlistModal from '@/components/ui/WaitlistModal'

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <main className="min-h-screen bg-slate-950">
      <Hero onCtaClick={openModal} />
      <Features />
      <Comparison />
      <Demo />
      <FinalCTA onCtaClick={openModal} />
      <Footer />
      <WaitlistModal isOpen={showModal} onClose={closeModal} />
    </main>
  )
}