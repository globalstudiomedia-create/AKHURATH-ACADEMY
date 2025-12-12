import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function EthicalHackingEssentialsPage() {
  useEffect(() => {
    document.title =
      'Ethical Hacking Essentials Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Ethical Hacking · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ethical Hacking Essentials (2 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn how professional ethical hackers think, scan and exploit
            vulnerabilities – and how to use that knowledge to protect systems
            legally.
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
              This hands-on Ethical Hacking Essentials course at Akhurath
              Advanced Studies takes students beyond theory and into practical
              hacking labs. You will simulate attacks in a controlled
              environment and learn how to secure networks, websites and
              applications.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The course blends Kali Linux tools, basic scripting and real-world
              attack methodologies commonly used by security professionals.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Topics Covered
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Ethical hacking concepts and legal guidelines in India</li>
              <li>Reconnaissance, scanning &amp; enumeration techniques</li>
              <li>Password attacks, Wi-Fi hacking basics, Metasploit intro</li>
              <li>Basic web app security: SQL injection, XSS overview</li>
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
              <li>Practical understanding of hacking tools &amp; commands</li>
              <li>Ability to perform basic security assessments</li>
              <li>Mindset of an attacker &amp; defender both</li>
              <li>Foundation for advanced penetration testing and bug bounty</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career &amp; Learning Path
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Junior security analyst / trainee penetration tester</li>
              <li>Bug bounty hunter (with further practice)</li>
              <li>Next step: SOC Analyst Level 1 or Bug Bounty course</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              Akhurath Advanced Studies prepares students in Kerala to follow
              ethical and legal routes while practising cybersecurity.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
