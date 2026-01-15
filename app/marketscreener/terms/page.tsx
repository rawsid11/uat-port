import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service — Market Screener AI",
  description: "Terms of Service for Market Screener AI Chrome Extension",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[var(--paper-bg)] text-[var(--ink-primary)] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-[var(--accent-primary)] hover:underline mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="font-unifraktur text-4xl md:text-5xl mb-8">Terms of Service</h1>

        <div className="prose prose-lg font-serif space-y-6">
          <p className="text-lg">
            <strong>Effective Date:</strong> January 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b border-[var(--border-color)] pb-2">
              Market Screener AI - Chrome Extension
            </h2>

            <h3 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h3>
            <p>
              By installing and using the Market Screener AI Chrome extension, you agree to these Terms of Service.
              If you do not agree to these terms, please do not use the extension.
            </p>

            <h3 className="text-xl font-semibold mt-6">2. Description of Service</h3>
            <p>
              Market Screener AI is a Chrome extension that helps users analyze and screen market data
              using Google Sheets integration. The extension allows you to read from and write to
              Google Sheets documents that you have access to.
            </p>

            <h3 className="text-xl font-semibold mt-6">3. User Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining the security of your Google account.</li>
              <li>You agree to use the extension only for lawful purposes.</li>
              <li>You are responsible for any data you create or modify using this extension.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">4. Data Usage</h3>
            <p>
              The extension accesses Google Sheets data only with your explicit permission through Google OAuth.
              We do not store, share, or transmit your data to any external servers.
              All processing occurs locally in your browser.
            </p>

            <h3 className="text-xl font-semibold mt-6">5. Disclaimer of Warranties</h3>
            <p>
              This extension is provided &quot;as is&quot; without any warranties, express or implied.
              We do not guarantee that the extension will be error-free or uninterrupted.
              Any financial decisions made based on data from this extension are solely your responsibility.
            </p>

            <h3 className="text-xl font-semibold mt-6">6. Limitation of Liability</h3>
            <p>
              In no event shall the developer be liable for any indirect, incidental, special,
              or consequential damages arising from your use of this extension.
            </p>

            <h3 className="text-xl font-semibold mt-6">7. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the extension
              after changes constitutes acceptance of the new terms.
            </p>

            <h3 className="text-xl font-semibold mt-6">8. Contact</h3>
            <p>
              For any questions regarding these terms, please contact:{" "}
              <a
                href="mailto:rawsiddhesh11@gmail.com"
                className="text-[var(--accent-primary)] hover:underline"
              >
                rawsiddhesh11@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border-color)] text-sm text-[var(--ink-secondary)]">
          <p>Last updated: January 2025</p>
        </div>
      </div>
    </main>
  )
}
