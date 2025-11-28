"use client"

import { NewspaperHeader } from "@/components/newspaper-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ReaderReviews } from "@/components/reader-reviews"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollFade } from "@/components/scroll-fade"
import { CurrentlySection } from "@/components/currently-section"

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <main className="main-content min-h-screen bg-background relative">
        {/* Noise texture overlay */}
        <div className="fixed inset-0 pointer-events-none newspaper-texture z-20" />

        <div className="coffee-stain z-10" style={{ top: "15%", right: "5%" }} />
        <div className="coffee-stain z-10" style={{ bottom: "25%", left: "3%", width: "120px", height: "120px" }} />

        <div className="fold-mark z-10" style={{ left: "50%", top: 0, bottom: 0, width: "2px" }} />

        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 relative z-30">
          <ScrollFade>
            <NewspaperHeader />
          </ScrollFade>

          <HeroSection />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 sm:mt-8">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-6">
              <AboutSection />
              <ExperienceSection />
            </div>

            {/* Right column */}
            <div className="lg:col-span-7 space-y-6">
              <TechStackSection />
              <ProjectsSection />
            </div>
          </div>

          <CurrentlySection />

          {/* Reader Reviews Section */}
          <ReaderReviews />

          {/* Footer */}
          <ScrollFade delay={6}>
            <footer className="mt-8 sm:mt-12 pt-4 border-t-2 border-foreground text-center">
              <div className="ornamental-divider mb-4">❦</div>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                "All the data, all the insights" — Est. 2024
              </p>
              <p className="text-[10px] text-muted-foreground mt-2">© The Data Chronicle. All rights reserved.</p>
            </footer>
          </ScrollFade>
        </div>
      </main>
    </>
  )
}
