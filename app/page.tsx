export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Safety Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Prescriptions.<br />
          <span className="text-[#58a6ff]">Catch Dangerous Interactions.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Point your camera at any prescription bottle. MedScan reads the label with OCR and instantly checks for drug interactions, allergies, and contraindications across all your medications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">Cancel anytime. No hidden fees.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {['OCR Label Scanning', 'Drug Interaction Database', 'Allergy Alerts', 'Contraindication Checks', 'Caregiver Profiles', 'Instant Results'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Scan the Bottle', desc: 'Upload a photo or use your camera to capture the prescription label.' },
            { step: '2', title: 'OCR Extracts Data', desc: 'Tesseract.js reads the medication name, dosage, and instructions instantly.' },
            { step: '3', title: 'Get Safety Report', desc: 'Cross-reference against drug databases for interactions and contraindications.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center mb-4 text-sm">{item.step}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay safe</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prescription scans',
              'Full drug interaction database',
              'Allergy & contraindication alerts',
              'Up to 5 caregiver profiles',
              'Scan history & reports',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How accurate is the OCR scanning?',
              a: 'MedScan uses Tesseract.js, a proven OCR engine, to read prescription labels. Accuracy is high for standard printed labels. We recommend confirming results with your pharmacist for critical decisions.',
            },
            {
              q: 'Where does the drug interaction data come from?',
              a: 'We cross-reference against established drug interaction databases including FDA-approved sources. The database is updated regularly to reflect the latest safety information.',
            },
            {
              q: 'Is my health data private and secure?',
              a: 'Yes. Scans are processed client-side where possible. We do not sell your data. All stored information is encrypted and you can delete your account and data at any time.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        <p>© {new Date().getFullYear()} MedScan. Not a substitute for professional medical advice.</p>
      </footer>
    </main>
  )
}
