import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { ScrollFade } from "./scroll-fade"
import { OrnamentalDivider } from "./ornamental-divider"

export function AboutSection() {
  return (
    <ScrollFade delay={2}>
      <article className="lg:border-r border-border lg:pr-6" id="about">
        <h3 className="font-mono text-lg sm:text-xl text-center border-b border-border pb-2 mb-4 tracking-wider">
          ABOUT HIM
        </h3>

        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-foreground bg-foreground">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-background"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-2 whitespace-nowrap">
              <span className="text-xs italic text-muted-foreground">The Data & GenAI Engineer</span>
            </div>
          </div>
        </div>

        <p className="drop-cap text-sm sm:text-base text-justify leading-relaxed mb-4">
          Whispers are circulating about an uncommon engineer — <strong>Siddhesh Phapale</strong> — known across tech
          circles for transforming data and GenAI into systems that deliver real business impact, not just demos. Always
          curious, always building — long before GenAI became mainstream, he lives where data intelligence, automation,
          and generative AI intersect with strategic decision-making and revenue growth.
        </p>

        <OrnamentalDivider symbol="❧" />

        <p className="text-sm sm:text-base text-justify leading-relaxed mb-4">
          Siddhesh doesn't create ordinary dashboards or BI reports — he builds strategic intelligence platforms that
          drive sales performance, accelerate decision-making, and enable customer acquisition. With a sharp eye for
          identifying use cases and automation opportunities, he turns raw data into systems that scale, save time, and
          generate measurable ROI.
        </p>

        <p className="text-sm sm:text-base text-justify leading-relaxed mb-4">
          He's known for architecting multi-agent GenAI workflows and deploying production-ready automation systems,
          balancing innovation with business responsibility. He thinks beyond model outputs — focusing on token
          optimization, cost control, intelligent caching, and maximizing performance per rupee, ensuring organizations
          adopt GenAI without overspending.
        </p>

        <OrnamentalDivider />

        <p className="text-sm sm:text-base text-center font-bold italic text-accent">
          Every project he touches is engineered to automate, simplify, and multiply business value.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 pt-4 border-t border-border">
          <a
            href="https://github.com/siddheshphapale"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors border border-foreground"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/siddheshphapale"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors border border-foreground"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://twitter.com/siddheshphapale"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors border border-foreground"
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:contact@siddheshphapale.live"
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors border border-foreground"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </article>
    </ScrollFade>
  )
}
