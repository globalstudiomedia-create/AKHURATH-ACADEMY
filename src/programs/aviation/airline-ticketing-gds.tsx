import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function AirlineTicketingPage() {
  useEffect(() => {
    document.title =
      'Airline Ticketing & GDS Operations Course | Akhurath Advanced Studies, India';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Ticketing &amp; Reservations · Akhurath Advanced Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Airline Ticketing &amp; GDS Operations Course
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn how global reservation systems work and become a skilled
            ticketing and reservations executive in the aviation or travel
            industry.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Course Overview
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              This course at Akhurath Advanced Studies focuses on computerised
              reservation systems and airline ticketing processes used worldwide
              by airlines and travel agencies.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              You&apos;ll learn how to search fares, issue tickets, manage
              rebooking and cancellations using popular Global Distribution
              Systems (GDS).
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Quick Facts
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Duration: 4–6 months</li>
              <li>• Tools: exposure to at least one major GDS platform</li>
              <li>• Suitable for aviation and travel industry aspirants</li>
              <li>• Placement guidance for ticketing &amp; reservation roles</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Topics Covered
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Airline fare structures and classes</li>
              <li>• PNR creation, modification and cancellation</li>
              <li>• Issuing e-tickets and managing reissues</li>
              <li>• Itinerary planning &amp; multi-sector bookings</li>
              <li>• Customer communication &amp; email etiquettes</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Where Can You Work?
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Airline reservation counters</li>
              <li>• Travel agencies and tour operators</li>
              <li>• Online travel portals</li>
              <li>• Corporate travel desks</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
