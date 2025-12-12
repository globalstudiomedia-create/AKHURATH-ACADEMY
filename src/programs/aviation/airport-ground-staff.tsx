import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function AirportGroundStaffPage() {
  useEffect(() => {
    document.title =
      'Airport Ground Staff Training Course | Akhurath Advanced Studies, India';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Aviation Programs · Akhurath Advanced Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Airport Ground Staff Training Course in India
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Build a job–ready profile for check-in, boarding, baggage and
            customer service roles at airports with Akhurath Advanced Studies.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Course Overview
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              The Airport Ground Staff Training program at Akhurath Advanced
              Studies is designed for 12th-pass students who want to start their
              aviation career on the ground – at the check-in counters, boarding
              gates and customer service desks of domestic and international
              airports.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              You&apos;ll learn real airline procedures, documentation, safety
              guidelines and professional communication skills required to work
              confidently with passengers and airline teams.
            </p>

            <h3 className="text-lg font-semibold text-blue-950 mt-6 mb-2">
              Who is this course for?
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• 10+2 passed students from any stream</li>
              <li>• Candidates interested in airport customer service</li>
              <li>• Freshers looking for entry-level aviation jobs in India</li>
            </ul>
          </div>

          {/* Key Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Key Highlights
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Duration: 6–9 months (including practical sessions)</li>
              <li>• Location: Akhurath Advanced Studies campus in India</li>
              <li>• Focus on airport operations &amp; ground handling</li>
              <li>• Airline-style grooming &amp; communication training</li>
              <li>• Interview preparation &amp; placement guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            What You Will Learn
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700">
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-blue-950 mb-2">
                Airport Operations
              </h3>
              <p>
                Airport layout, departments, airport codes, airline partners and
                daily operations.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-blue-950 mb-2">
                Check-in &amp; Boarding
              </h3>
              <p>
                Check-in procedures, boarding passes, baggage rules, security
                checks and boarding gate operations.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-blue-950 mb-2">
                Customer Service
              </h3>
              <p>
                Handling passenger queries, managing delays, missed flights and
                service recovery with empathy.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-blue-950 mb-2">
                Safety &amp; Security
              </h3>
              <p>
                Aviation safety guidelines, restricted items, emergency
                situations and coordination with security agencies.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-blue-950 mb-2">
                Professional Skills
              </h3>
              <p>
                Spoken English, body language, grooming, etiquette and
                professional behaviour at the airport.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="font-semibold text-blue-950 mb-2">
                Interview Preparation
              </h3>
              <p>
                Resume building, mock interviews and HR round preparation for
                ground staff positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers + CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Opportunities
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              After completing the Airport Ground Staff Training course at
              Akhurath Advanced Studies, you can apply for roles such as:
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Airport check-in staff</li>
              <li>• Boarding gate staff</li>
              <li>• Baggage handling &amp; ramp operations staff</li>
              <li>• Airport customer service associate</li>
              <li>• Airline ground operations executive</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Why Choose Akhurath Advanced Studies?
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Aviation-first curriculum created by industry trainers</li>
              <li>• Focused on students from India with global career goals</li>
              <li>• Personality development, grooming and communication support</li>
              <li>• Placement guidance for airports and airlines</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
