import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function AirportCustomerServicePage() {
  useEffect(() => {
    document.title =
      'Airport Customer Service & Passenger Handling Course | Akhurath Advanced Studies, India';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Passenger Handling · Akhurath Advanced Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Airport Customer Service &amp; Passenger Handling Course
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Master world-class passenger service skills for check-in counters,
            boarding gates and airline customer support roles.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Why Airport Customer Service?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Every passenger&apos;s airport journey depends on professional,
              polite and well-trained customer service executives. This program
              at Akhurath Advanced Studies is ideal for students who love
              interacting with people and want a stable aviation career.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Learn how to handle stressful situations calmly</li>
              <li>• Build confidence in communication &amp; complaint handling</li>
              <li>• Understand real airport customer service scenarios</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Course Snapshot
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Duration: 4–6 months</li>
              <li>• Focus: passenger experience, service recovery, soft skills</li>
              <li>• Training location: Akhurath Advanced Studies campus, India</li>
              <li>• Placement guidance for airports and airlines</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Skills You Will Gain
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Handling check-in queues &amp; passenger queries</li>
              <li>• Managing delays, cancellations &amp; rebooking</li>
              <li>• Managing special assistance passengers (SSR)</li>
              <li>• Complaint handling &amp; service recovery techniques</li>
              <li>• Voice &amp; accent improvement for call support roles</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Job Roles After Completion
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Airport customer service associate</li>
              <li>• Airline call centre executive</li>
              <li>• Passenger relations officer</li>
              <li>• Ground support &amp; service desk executive</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
