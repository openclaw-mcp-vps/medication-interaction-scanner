import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedScan — Medication Interaction Scanner',
  description: 'Scan prescription bottles for dangerous drug interactions, allergies, and contraindications. Stay safe with AI-powered medication checking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="204bb0fc-21b3-49bb-9f6b-5a330a3a46bb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
