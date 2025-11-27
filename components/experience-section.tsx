"use client"

import { ScrollFade } from "./scroll-fade"

const timelineItems = [
  {
    highlight: "40K+ hits/day",
    description: "Designed revenue-focused BI systems used daily at scale",
    detail: "Enterprise-grade dashboards driving strategic decisions",
  },
  {
    highlight: "Multi-Agent GenAI",
    description: "Created applications using LangChain & LLM orchestration",
    detail: "Production-ready AI workflows with intelligent routing",
  },
  {
    highlight: "100s of hours saved",
    description: "Automated processes saving manual effort monthly",
    detail: "End-to-end pipeline automation with monitoring",
  },
  {
    highlight: "60%+ cost reduction",
    description: "Reduced GenAI deployment & token consumption costs",
    detail: "Token optimization, caching, and efficient architectures",
  },
  {
    highlight: "Use Case Expert",
    description: "Proven ability to identify automation scope & high-value opportunities",
    detail: "Strategic consulting on AI/ML implementation",
  },
]

export function ExperienceSection() {
  return (
    <ScrollFade delay={3}>
      <article className="lg:border-r border-border lg:pr-6">
        <div className="border border-foreground p-3 sm:p-4 bg-card">
          <h4 className="font-mono text-xs sm:text-sm tracking-wider border-b border-border pb-1 mb-4">
            CAREER HIGHLIGHTS
          </h4>

          <div className="space-y-4">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item group cursor-default py-2">
                <div className="flex flex-col">
                  <span className="text-accent font-bold text-sm sm:text-base">{item.highlight}</span>
                  <span className="text-xs sm:text-sm text-foreground">{item.description}</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </ScrollFade>
  )
}
