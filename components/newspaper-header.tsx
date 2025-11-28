import { WeatherWidget } from "./weather-widget"
import { DarkModeToggle } from "./dark-mode-toggle"

export function NewspaperHeader() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
  ]

  return (
    <header className="border-b-2 border-border pb-4">
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs mb-2 border-b border-border pb-2 gap-2 sm:gap-0">
        <div className="text-center sm:text-left">
          <p className="font-mono tracking-wider">"All the data, all the insights"</p>
          <div className="border border-foreground px-2 py-0.5 inline-block mt-1">
            <span className="font-bold text-[10px]">Est. 2024</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <DarkModeToggle />
        </div>

        <WeatherWidget />
      </div>

      <div className="text-center py-4 sm:py-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground leading-tight">
          The Data Chronicle
        </h1>
        <p className="text-xs text-muted-foreground mt-1 italic">Turning Data into Insights & GenAI into Impact</p>
      </div>

      <nav className="flex justify-center gap-4 sm:gap-8 py-3 border-y border-border mb-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link font-mono text-xs sm:text-sm tracking-wider uppercase text-foreground hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-0 text-xs pt-2">
        <p className="font-bold">Vol. LXXIV, No. 31</p>
        <p className="hidden sm:block text-muted-foreground">✦ ✦ ✦</p>
        <p className="text-muted-foreground">{formattedDate}</p>
      </div>
    </header>
  )
}
