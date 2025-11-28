"use client"

import { TypewriterText } from "./typewriter-text"
import { ScrollFade } from "./scroll-fade"

export function HeroSection() {
  return (
    <ScrollFade delay={1}>
      <div className="mt-4 sm:mt-6">
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-center uppercase tracking-tight leading-tight text-accent">
          <TypewriterText text="Engineer Obsessed With Converting Data & GenAI Into Automation, Revenue, and Real Business Outcomes" />
        </h2>

        <div className="mt-6 py-6 relative">
          {/* Top decorative line with quote mark */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-[2px] bg-[#2c2416] dark:bg-[#4d4030]"></div>
            <span className="text-3xl font-serif text-[#8b1a1a] dark:text-[#c44040] leading-none">"</span>
            <div className="flex-1 h-[2px] bg-[#2c2416] dark:bg-[#4d4030]"></div>
          </div>

          {/* Quote text */}
          <div className="text-center font-serif italic text-base sm:text-lg md:text-xl">
            <p className="m-0">
              Some call him <strong className="font-bold">unstoppable</strong>.
            </p>
            <p className="m-0 mt-1">
              He calls it <em>obsession with execution and impact</em>.
            </p>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-4 h-[2px] bg-[#2c2416] dark:bg-[#4d4030]"></div>
        </div>
      </div>
    </ScrollFade>
  )
}
