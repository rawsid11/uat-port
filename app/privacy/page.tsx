import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — Market Screener AI",
  description: "Privacy Policy for Market Screener AI Chrome Extension",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--paper-bg)] text-[var(--ink-primary)] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-[var(--accent-primary)] hover:underline mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="font-unifraktur text-4xl md:text-5xl mb-8">Privacy Policy</h1>

        <div className="prose prose-lg font-serif space-y-6">
          <p className="text-lg">
            <strong>Effective Date:</strong> January 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b border-[var(--border-color)] pb-2">
              Market Screener AI - Chrome Extension
            </h2>

            <p>
              Market Screener AI uses Google OAuth to access Google Sheets on behalf of the user.
            </p>

            <h3 className="text-xl font-semibold mt-6">Data Collection & Usage</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The application only reads and writes spreadsheet data explicitly created or selected by the user.</li>
              <li>No personal data is stored on external servers.</li>
              <li>No data is shared with third parties.</li>
              <li>All data processing happens locally in your browser.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Google API Services</h3>
            <p>
              This application uses Google API Services. By using this application, you also agree to be bound by the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-primary)] hover:underline"
              >
                Google API Services User Data Policy
              </a>.
            </p>

            <h3 className="text-xl font-semibold mt-6">Data Security</h3>
            <p>
              Your Google account credentials are handled securely through Google&apos;s OAuth 2.0 authentication flow.
              We never see or store your Google password.
            </p>

            <h3 className="text-xl font-semibold mt-6">Contact</h3>
            <p>
              For any privacy-related questions or concerns, please contact:{" "}
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
