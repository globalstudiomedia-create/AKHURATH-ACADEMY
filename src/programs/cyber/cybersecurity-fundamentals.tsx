import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function CybersecurityFundamentalsPage() {
  useEffect(() => {
    document.title =
      'Cybersecurity Fundamentals Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Cybersecurity · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Cybersecurity Fundamentals (1–1.5 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn the core concepts of cybersecurity, common attacks and
            protection techniques to start your journey as a security
            professional in Kerala.
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
              The Cybersecurity Fundamentals course at Akhurath Advanced
              Studies introduces students to the foundations of information
              security – networks, systems, threats and defence mechanisms.
              It is ideal for 12th-pass students and beginners in Kerala who
              want to move towards ethical hacking, SOC or network security.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              You will understand how hackers think, how systems get attacked
              and how organisations design multiple layers of defence.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              What You Will Learn
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Basics of networks, operating systems and the internet</li>
              <li>Types of cyber attacks (malware, phishing, social engineering)</li>
              <li>Fundamentals of encryption, passwords and authentication</li>
              <li>Best practices for securing personal and small-business systems</li>
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
              <li>Understanding of core cybersecurity concepts &amp; vocabulary</li>
              <li>Ability to recognise common cyber threats and scams</li>
              <li>Awareness of security tools like antivirus, firewalls &amp; VPN</li>
              <li>Foundation for advanced tracks like Ethical Hacking and SOC</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Future Path After This Course
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              After completing Cybersecurity Fundamentals at Akhurath Advanced
              Studies, students in Kerala can confidently move into specialised
              programs like:
            </p>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Ethical Hacking Essentials</li>
              <li>SOC Analyst Level 1</li>
              <li>Network Security &amp; Linux Admin</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
