'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

const demoOptions = [
  { 
    id: 'dental', 
    title: 'Dental Clinic', 
    description: 'Appointment booking & patient inquiries',
    audioSrc: '/audio/demo-dental.m4a' 
  },
  { 
    id: 'gp', 
    title: 'General Practitioner', 
    description: 'Consultation scheduling & prescription refills',
    audioSrc: '/audio/demo-dental.m4a' 
  },
  { 
    id: 'diagnostic', 
    title: 'Diagnostic Center', 
    description: 'Test booking & results coordination',
    audioSrc: '/audio/demo-dental.m4a' 
  },
]

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState(demoOptions[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progressPercent = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(progressPercent || 0)
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && audioRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newProgress = (clickX / rect.width) * 100
      const newTime = (newProgress / 100) * audioRef.current.duration
      audioRef.current.currentTime = newTime
      setProgress(newProgress)
    }
  }

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(0)
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(0)
  }, [selectedDemo])

  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-medium text-sm tracking-wide uppercase">
            Hear It In Action
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 mb-6 italic">
            Try Our Live Demos
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Listen to real conversations. This is what your patients will experience.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Selection */}
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-slate-900">
              1. Select Scenario
            </h3>
            
            <div className="space-y-3">
              {demoOptions.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 ${
                    selectedDemo.id === demo.id
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="block font-semibold">{demo.title}</span>
                  <span 
                    className={`block text-sm mt-1 ${
                      selectedDemo.id === demo.id ? 'text-white/60' : 'text-slate-500'
                    }`}
                  >
                    {demo.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Audio Player */}
          <div className="bg-white rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-slate-900">
              2. Listen
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center py-8">
              {/* Play Button */}
              <button
                onClick={togglePlay}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  isPlaying 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>

              {/* Progress Bar */}
              <div className="w-full max-w-xs mt-8">
                <div
                  className="w-full h-2 bg-slate-100 rounded-full overflow-hidden cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full bg-emerald-500 transition-all duration-100 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Audio Element */}
              <audio
                ref={audioRef}
                src={selectedDemo.audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnd}
                preload="metadata"
              />
            </div>

            <p className="text-center text-slate-400 text-sm">
              {selectedDemo.title} demo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}