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

        <div className="pull-quote mt-6">
          <p className="quote-line-1">
            Some call him <strong className="font-bold">unstoppable</strong>.
          </p>
          <p className="quote-line-2 mt-1">
            He calls it <em>obsession with execution and impact</em>.
          </p>
        </div>
      </div>
    </ScrollFade>
  )
}
