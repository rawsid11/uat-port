"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [lines, setLines] = useState<number[]>([])
  const [printingPhase, setPrintingPhase] = useState(0)

  useEffect(() => {
    // Phase 1: Paper rolling in
    setTimeout(() => setPrintingPhase(1), 300)

    // Phase 2: Add lines progressively (printing effect)
    const lineCount = 8
    for (let i = 0; i < lineCount; i++) {
      setTimeout(
        () => {
          setLines((prev) => [...prev, i])
        },
        600 + i * 120,
      )
    }

    // Phase 3: Finishing
    setTimeout(() => setPrintingPhase(2), 600 + lineCount * 120)

    // Hide loading screen after animation
    setTimeout(
      () => {
        setIsLoading(false)
      },
      600 + lineCount * 120 + 600,
    )
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Printing press roller effect */}
      <div className={`printing-press-roller ${printingPhase >= 1 ? "active" : ""}`} />

      {/* Paper coming out of press */}
      <div className={`newspaper-paper ${printingPhase >= 1 ? "printing" : ""}`}>
        <div className="text-center mb-6">
          <div className="press-stamp">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-foreground">
              The Data Chronicle
            </h1>
            <div className="h-0.5 bg-foreground mx-auto mt-2 press-line" />
            <div className="h-0.5 bg-foreground mx-auto mt-1 press-line delay-1" />
          </div>
          <p
            className={`text-sm text-muted-foreground mt-3 italic transition-opacity duration-500 ${printingPhase >= 1 ? "opacity-100" : "opacity-0"}`}
          >
            {printingPhase < 2 ? "Printing today's edition..." : "Fresh off the press!"}
          </p>
        </div>

        {/* Printing lines with ink effect */}
        <div className="w-56 sm:w-72 space-y-2">
          {lines.map((line) => (
            <div key={line} className="print-line-wrapper">
              <div className="print-line" style={{ animationDelay: `${line * 0.05}s` }} />
            </div>
          ))}
        </div>

        {/* Ink splatter effects */}
        <div className={`ink-splatter splatter-1 ${printingPhase >= 1 ? "visible" : ""}`} />
        <div className={`ink-splatter splatter-2 ${printingPhase >= 1 ? "visible" : ""}`} />
      </div>

      {/* Bottom roller */}
      <div className={`printing-press-roller bottom ${printingPhase >= 1 ? "active" : ""}`} />
    </div>
  )
}
