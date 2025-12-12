import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function SOCAnalystLevel1Page() {
  useEffect(() => {
    document.title =
      'SOC Analyst Level 1 Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Security Operations Centre · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            SOC Analyst Level 1 (2–3 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Get job-ready skills for Security Operations Centre (SOC) roles:
            monitoring, analysing and responding to security alerts.
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
              The SOC Analyst Level 1 course at Akhurath Advanced Studies is
              focused on practical skills required for entry-level SOC jobs in
              India. Students learn how enterprises monitor logs, detect
              suspicious behaviour and respond to incidents.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              You will be introduced to SIEM tools, log analysis, alert triage
              and basic incident documentation – exactly what SOC teams expect
              from L1 analysts.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Key Modules
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Enterprise network &amp; security architecture basics</li>
              <li>Log types: firewall, endpoint, server, application logs</li>
              <li>SIEM concepts and working with sample alert dashboards</li>
              <li>Use-cases: brute-force, malware, phishing, insider threats</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Careers */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Job Skills You Gain
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Reading &amp; interpreting security alerts and logs</li>
              <li>Documenting incidents in a structured way</li>
              <li>Escalating critical alerts to higher-level teams</li>
              <li>Understanding basic playbooks &amp; response workflows</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Opportunities in Kerala &amp; India
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Level 1 SOC Analyst</li>
              <li>Security Operations Executive</li>
              <li>Information Security Support Engineer</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              With more companies setting up SOC operations in India, trained
              analysts from Akhurath Advanced Studies are positioned for strong
              entry-level opportunities.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
