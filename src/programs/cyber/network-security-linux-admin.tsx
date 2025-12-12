import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function NetworkSecurityLinuxAdminPage() {
  useEffect(() => {
    document.title =
      'Network Security & Linux Admin Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Network Security · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Network Security &amp; Linux Admin (1.5–2 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Build strong fundamentals in computer networks, Linux commands and
            security configurations for enterprise environments.
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
              This course at Akhurath Advanced Studies is designed for students
              who want to go deeper into system and network-level security.
              You will work with Linux systems and understand how to configure
              basic security for servers, firewalls and services.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The program is a perfect bridge between basic cybersecurity and
              advanced roles in administration and penetration testing.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Modules Covered
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Networking basics: IP, TCP/UDP, ports, routing, VLANs</li>
              <li>Introduction to Linux OS, file system, permissions</li>
              <li>Essential Linux commands for admins &amp; security</li>
              <li>Basic firewall rules, SSH hardening and service security</li>
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
              <li>Confidence using Linux for security &amp; admin tasks</li>
              <li>Ability to understand and explain network diagrams</li>
              <li>Experience configuring basic security controls</li>
              <li>Foundation for roles like SOC, network admin or DevOps</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Options After This Course
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Junior Linux Administrator</li>
              <li>Network Support / NOC Engineer</li>
              <li>Security Operations / Infrastructure Support</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              These skills are in demand across IT companies and data centres
              in Kerala and the rest of India.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
