import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function BugBountyFreelanceHackingPage() {
  useEffect(() => {
    document.title =
      'Bug Bounty & Freelance Hacking Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Bug Bounty · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Bug Bounty &amp; Freelance Hacking (1 Month)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn how security researchers legally find vulnerabilities in
            websites and apps – and get paid through bug bounty platforms.
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
              This advanced short-term course at Akhurath Advanced Studies is
              best suited for students who already know basics of web security
              and ethical hacking. You will learn the workflow used by bug
              bounty hunters to identify, report and document vulnerabilities.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The focus is on practical methods, report writing and building a
              reputation on popular platforms.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Topics &amp; Practice
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Intro to bug bounty platforms &amp; program rules</li>
              <li>Finding low-hanging bugs: IDOR, XSS, CSRF basics</li>
              <li>Recon techniques, automation scripts &amp; tips</li>
              <li>Writing professional, reproducible bug reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Outcomes */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              What You&apos;ll Be Able To Do
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Participate in public and private bug bounty programs</li>
              <li>Apply ethical hacking skills in a legal, structured way</li>
              <li>Build a portfolio of reports to show employers</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Freelance &amp; Career Benefits
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              Many security professionals in Kerala and across India start with
              bug bounty as a way to sharpen skills and earn side income.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Additional income stream for skilled learners</li>
              <li>Stronger profile for security job interviews</li>
              <li>Visibility in the global infosec community</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
