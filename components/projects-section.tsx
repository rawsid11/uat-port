import { ExternalLink, Brain, Wallet, Activity, Globe } from "lucide-react"
import { ScrollFade } from "./scroll-fade"

const projects = [
  {
    title: "RepoIntel",
    description:
      "AI-powered tool that transforms codebases into beginner-friendly tutorials and migrates code between different technologies/frameworks. Features dual-LLM integration, workflow orchestration, and a React-based web interface.",
    tags: ["Python", "FastAPI", "React", "Gemini 2.0", "OpenAI", "Docker", "Cloud Run"],
    icon: Brain,
    url: "https://siddheshphapale.live/nova/p1/repointel/",
  },
  {
    title: "Welfy",
    description:
      "AI Financial Assistant that analyzes personal financial data from Fi Money and provides intelligent insights through a beautiful chat interface. Features secure MCP integration, real-time portfolio analysis, and personalized financial recommendations.",
    tags: ["Google Gemini AI", "MCP", "Python", "FastAPI", "React", "TypeScript"],
    icon: Wallet,
    url: "https://siddheshphapale.live/nova/p2/welfy/",
  },
  {
    title: "Hustlr",
    description:
      "Your Strava Sidekick. An AI-powered fitness companion that connects to your Strava account to provide personalized training insights and performance analysis. Chat naturally with your data to get coaching advice, track progress, and discover patterns in your workouts.",
    tags: ["Strava API", "Gemini 2.0", "MCP", "FastAPI", "OAuth 2.0", "Docker"],
    icon: Activity,
    url: "https://siddheshphapale.live/nova/p3/hustlr/",
  },
  {
    title: "Epoquest",
    description:
      "An interactive web experience that lets you explore the evolution of any topic through beautifully crafted, AI-powered timelines. From ancient innovations to modern trends, it brings the story of progress to life with glass-morphism design.",
    tags: ["FastAPI", "Gemini Flash", "Google Search", "Vanilla JS", "Docker"],
    icon: Globe,
    url: "https://siddheshphapale.live/nova/p4/epoquest/",
  },
]

export function ProjectsSection() {
  return (
    <ScrollFade delay={4}>
      <article id="projects">
        <h3 className="font-mono text-lg sm:text-xl text-center border-b border-border pb-2 mb-4 tracking-wider">
          NOVA PROJECTS
        </h3>

        <p className="text-sm text-muted-foreground italic mb-4 text-center">
          A collection of AI-powered applications built with passion and purpose.
        </p>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-foreground p-4 bg-card hover:bg-secondary transition-all duration-200 group project-card-lift"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 flex sm:flex-col items-center gap-3 sm:gap-2">
                  <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <span className="sm:hidden font-bold text-lg uppercase tracking-wide">{project.title}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="hidden sm:block font-bold text-lg uppercase tracking-wide">{project.title}</h4>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm text-justify leading-relaxed mb-3 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs px-2 py-0.5 border border-foreground bg-background"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </article>
    </ScrollFade>
  )
}
