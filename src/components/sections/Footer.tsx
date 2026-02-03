'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-white font-semibold text-lg">SK Labs</span>

          {/* Tagline */}
          <p className="text-white/40 text-sm text-center">
            Voice AI Infrastructure for European Healthcare
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a
              href="mailto:unbaised.io@gmail.com"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-white/20">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}