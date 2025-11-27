"use client"

import type React from "react"

import { useState } from "react"
import { Send, MessageSquare } from "lucide-react"
import { ScrollFade } from "./scroll-fade"

interface Review {
  id: number
  name: string
  message: string
  date: string
}

export function ReaderReviews() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Tech Enthusiast",
      message: "Impressive portfolio! The newspaper theme is brilliant.",
      date: "Nov 2024",
    },
    {
      id: 2,
      name: "Fellow Developer",
      message: "Love the attention to detail and the vintage aesthetic.",
      date: "Nov 2024",
    },
  ])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    const newReview: Review = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    }

    setReviews([newReview, ...reviews])
    setName("")
    setMessage("")
  }

  return (
    <ScrollFade delay={5}>
      <article id="reviews" className="border-t-2 border-border pt-6 mt-6">
        <h3 className="font-mono text-lg sm:text-xl text-center border-b border-border pb-2 mb-4 tracking-wider flex items-center justify-center gap-2">
          <MessageSquare className="w-5 h-5" />
          READER REVIEWS
        </h3>

        <p className="text-sm text-muted-foreground italic mb-4 text-center">
          Letters to the Editor — Share your thoughts on this chronicle
        </p>

        {/* Submit form */}
        <form onSubmit={handleSubmit} className="border border-border p-4 bg-card mb-4">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-3 py-2 border border-border bg-background text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex gap-3">
            <textarea
              placeholder="Share your thoughts..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              className="flex-1 px-3 py-2 border border-border bg-background text-sm resize-none focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Submit</span>
            </button>
          </div>
        </form>

        {/* Reviews list */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {reviews.map((review) => (
            <div key={review.id} className="border-l-2 border-accent pl-3 py-1">
              <div className="flex justify-between items-start">
                <p className="font-bold text-sm">{review.name}</p>
                <span className="text-[10px] text-muted-foreground">{review.date}</span>
              </div>
              <p className="text-sm text-muted-foreground italic">"{review.message}"</p>
            </div>
          ))}
        </div>
      </article>
    </ScrollFade>
  )
}
