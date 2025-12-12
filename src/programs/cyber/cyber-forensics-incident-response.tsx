import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function CyberForensicsIncidentResponsePage() {
  useEffect(() => {
    document.title =
      'Cyber Forensics & Incident Response Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Forensics &amp; IR · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Cyber Forensics &amp; Incident Response (1.5–2 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn how to investigate security incidents, collect digital
            evidence and respond to breaches in an organised way.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Course Overview
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              This course at Akhurath Advanced Studies is for students who
              want to go beyond prevention and learn the &quot;after-attack&quot; part
              of cybersecurity – investigation and response.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              You will understand how logs, memory, disks and network captures
              are analysed to reconstruct what happened during an attack.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Modules Covered
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Incident response lifecycle and roles</li>
              <li>Basics of digital evidence, chain of custody &amp; legality</li>
              <li>Disk and memory basics, intro to forensics tools</li>
              <li>Analysing simple malware or suspicious activity traces</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Careers */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Skills You&apos;ll Build
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Understanding how organisations investigate breaches</li>
              <li>Ability to assist in basic log &amp; system analysis</li>
              <li>Awareness of forensic best practices &amp; tools</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Relevance
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Enhances profiles of SOC analysts &amp; security engineers</li>
              <li>Useful foundation for future specialist forensics roles</li>
              <li>Valuable skillset for companies handling sensitive data in Kerala</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
