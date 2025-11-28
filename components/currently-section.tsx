"use client"

import { ScrollFade } from "./scroll-fade"
import { BookOpen, FileText, Search, ExternalLink } from "lucide-react"

export function CurrentlySection() {
  return (
    <ScrollFade delay={4}>
      <section className="mt-8 border-2 border-foreground p-4 sm:p-6">
        <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide mb-4">Currently on My Desk</h3>

        <div className="ornamental-divider mb-4">§</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Now Reading Section */}
          <div className="border border-border p-3">
            <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
              <BookOpen className="h-4 w-4 text-accent" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Now Reading</h4>
            </div>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground leading-relaxed">
                <a
                  href="https://amzn.in/d/g7BkrIe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <span className="font-semibold text-foreground">Bulls, Bears and Other Beasts</span>
                  <span className="block text-xs mt-0.5">— Santosh Nair</span>
                  <span className="inline-flex items-center gap-1 text-xs text-accent mt-1">
                    <ExternalLink className="h-3 w-3" /> Buy on Amazon
                  </span>
                </a>
              </li>
              <li className="text-sm text-muted-foreground leading-relaxed">
                <a
                  href="https://amzn.in/d/910g58g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <span className="font-semibold text-foreground">
                    India, That is Bharat: Coloniality, Civilisation, Constitution
                  </span>
                  <span className="block text-xs mt-0.5">— J. Sai Deepak</span>
                  <span className="inline-flex items-center gap-1 text-xs text-accent mt-1">
                    <ExternalLink className="h-3 w-3" /> Buy on Amazon
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Research & Papers Section */}
          <div className="border border-border p-3">
            <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
              <FileText className="h-4 w-4 text-accent" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Research & Papers</h4>
            </div>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground leading-relaxed">
                <a
                  href="https://transformer-circuits.pub/2025/attribution-graphs/biology.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <span className="font-semibold text-foreground">On the Biology of a Large Language Model</span>
                  <span className="block text-xs mt-0.5">— Transformer Circuits Research Collective</span>
                  <span className="block text-xs text-muted-foreground mt-1 italic">
                    Understanding attribution graphs & internal structure of LLM reasoning
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-accent mt-1">
                    <ExternalLink className="h-3 w-3" /> Read Paper
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-border p-3">
            <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
              <Search className="h-4 w-4 text-accent" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Problem Spaces He's Exploring</h4>
            </div>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">AI-native SEO</span>
                <span className="block text-xs mt-1 italic">
                  Researching how organizations can be found through ChatGPT, Gemini & Perplexity as traditional search
                  declines.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ScrollFade>
  )
}
