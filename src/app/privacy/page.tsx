import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-slate prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              SK Labs ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are a European company and fully comply with the General Data Protection Regulation (GDPR) and other applicable European data protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect minimal data necessary to provide our services:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Contact Information:</strong> Email address when you join our waitlist</li>
              <li><strong>Usage Data:</strong> Anonymous analytics to improve our website experience</li>
              <li><strong>Communication Data:</strong> Any information you provide when contacting us</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Data</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use your information exclusively for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Notifying you about our product launch and updates</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Sovereignty</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Your data stays in Europe.</strong> We are committed to European data sovereignty:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>All data is processed and stored on European servers</li>
              <li>We do not transfer personal data outside the European Economic Area (EEA)</li>
              <li>Our infrastructure providers are GDPR-compliant European entities</li>
              <li>For healthcare clients, we offer on-premise deployment options where data never leaves your servers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected. Waitlist emails are retained until you unsubscribe or request deletion. You can request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Under GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Request limitation of data processing</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              We use only essential cookies necessary for the website to function. We do not use tracking cookies or share data with advertising networks. If we implement analytics, we use privacy-respecting, GDPR-compliant solutions that do not track individual users.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We minimize the use of third-party services. Any third-party processors we use are carefully vetted for GDPR compliance and are bound by data processing agreements that ensure your data is protected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-900 font-semibold">SK Labs</p>
              <p className="text-slate-600">Email: <a href="mailto:unbaised.io@gmail.com" className="text-emerald-600 hover:underline">unbaised.io@gmail.com</a></p>
            </div>
          </section>
        </div>
      </article>

      {/* Simple Footer */}
      <footer className="border-t border-slate-100 py-8 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-slate-500">
          <span>SK Labs</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  )
}