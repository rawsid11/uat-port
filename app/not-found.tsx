"use client"

import Link from "next/link"
import { FileQuestion, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none newspaper-texture" />

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Masthead */}
        <div className="border-b-2 border-foreground pb-4 mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide text-foreground">
            The Data Chronicle
          </h1>
          <p className="text-xs text-muted-foreground mt-1 italic">Extra! Extra! Page Not Found!</p>
        </div>

        {/* 404 Content */}
        <div className="border-2 border-foreground p-6 sm:p-8 bg-card">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 border-2 border-foreground flex items-center justify-center">
              <FileQuestion className="w-12 h-12 text-accent" />
            </div>
          </div>

          <h2 className="font-mono text-2xl sm:text-3xl tracking-wider mb-4">ARTICLE NOT FOUND</h2>

          <div className="ornamental-divider mb-4">✦</div>

          <p className="text-sm sm:text-base text-muted-foreground mb-2 italic">
            SPECIAL BULLETIN —{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Our investigative reporters have searched high and low, but the article you seek appears to have vanished
            from our archives. Perhaps it was never written, or perhaps it exists in a parallel edition we haven't yet
            discovered.
          </p>

          <div className="border-t border-b border-border py-4 mb-6">
            <p className="text-sm text-muted-foreground">
              Error Code: <span className="font-mono font-bold">404</span> — The requested page could not be located in
              The Chronicle's extensive archives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-mono text-sm tracking-wider"
            >
              <Home className="w-4 h-4" />
              RETURN TO FRONT PAGE
            </Link>
            <button
              onClick={() => typeof window !== "undefined" && window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-foreground bg-background hover:bg-secondary transition-colors font-mono text-sm tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              GO BACK
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground italic">"All the data, all the insights" — The Data Chronicle</p>
        </div>
      </div>
    </main>
  )
}
