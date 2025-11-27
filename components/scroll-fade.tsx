"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollFade({ children, className = "", delay = 0 }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 100)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {children}
    </div>
  )
}
