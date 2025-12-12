import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";

export default function PlacementsPage() {
  return (
    <main className="bg-white">
      <section className="pt-24 pb-12 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Placements
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Placement Guidance & Career Support
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            From grooming and communication to interview preparation, Akhurath supports students
            at every step of their placement journey.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              How We Prepare You for Jobs
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Dedicated sessions on interview skills and HR rounds</li>
              <li>• Airline-style grooming and communication training</li>
              <li>• Mock interviews and role-plays based on real scenarios</li>
              <li>• Resume & LinkedIn profile building assistance</li>
              <li>• Guidance on opportunities in India and abroad</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">
              Types of Roles Our Students Aim For
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• Airport Ground Staff & Customer Service</li>
              <li>• Cabin Crew & In-flight Services</li>
              <li>• Airline Reservation & Ticketing</li>
              <li>• Hospitality & Travel Management</li>
              <li>• Cybersecurity & AI roles in tech companies</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Placement Commitment
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              While no institute can guarantee jobs, Akhurath promises structured placement
              support, interview preparation, and continuous mentoring so that every student is
              industry-ready and confident.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              We work towards connecting students with airline, airport, hospitality and tech
              partners through recruitment drives, referrals and counselling support.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </main>
  );
}
