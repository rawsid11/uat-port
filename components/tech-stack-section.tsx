"use client"
import { useEffect, useRef, useState } from "react"
import { ScrollFade } from "./scroll-fade"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const techStack = [
  { category: "Languages & Frameworks", technologies: "Python, SQL, FastAPI, Streamlit" },
  { category: "AI/ML & Cloud", technologies: "LangChain, RAG, NLP, Vector DBs, Vertex AI, GCP, Docker, BigQuery" },
  { category: "Data & Visualization", technologies: "ETL/ELT Pipelines, Tableau, Power BI, MCP" },
]

export function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <ScrollFade delay={3}>
      <article ref={sectionRef} id="skills">
        <h3 className="font-mono text-lg sm:text-xl text-center border-b border-border pb-2 mb-4 tracking-wider">
          TECH STACK
        </h3>

        <div className="border border-foreground bg-card">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
                  Category
                </TableHead>
                <TableHead className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {techStack.map((item) => (
                <TableRow key={item.category} className="border-b border-border last:border-b-0">
                  <TableCell className="font-mono text-xs sm:text-sm text-accent font-medium">
                    {item.category}
                  </TableCell>
                  <TableCell className="text-sm sm:text-base">{item.technologies}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-sm sm:text-base text-center italic mt-4 text-muted-foreground">
          Every system he builds is designed for clarity, scale, and measurable ROI — not proof-of-concept for slides.
        </p>
      </article>
    </ScrollFade>
  )
}
