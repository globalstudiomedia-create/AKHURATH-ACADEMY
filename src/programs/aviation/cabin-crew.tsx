import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function CabinCrewPage() {
  useEffect(() => {
    document.title =
      'Cabin Crew & In-Flight Services Course | Akhurath Advanced Studies, India';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Cabin Crew Training · Akhurath Advanced Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Cabin Crew &amp; In-Flight Services Course in India
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Prepare for glamorous yet demanding cabin crew careers with
            professional in-flight service, safety and grooming training.
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
              The Cabin Crew &amp; In-Flight Services program at Akhurath
              Advanced Studies helps you develop the poise, confidence and
              technical knowledge required to serve passengers on domestic and
              international flights.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              From safety demonstrations and emergency procedures to food
              service and passenger care, this course covers every aspect of
              cabin crew life.
            </p>

            <h3 className="text-lg font-semibold text-blue-950 mt-6 mb-2">
              Eligibility
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• 10+2 passed (any stream)</li>
              <li>• Good communication skills in English/Hindi</li>
              <li>• Pleasant personality and service mindset</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Course Highlights
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Duration: 9–12 months</li>
              <li>• Grooming, etiquette &amp; personality development</li>
              <li>• Aviation medical &amp; fitness awareness</li>
              <li>• Mock safety demos &amp; in-flight announcements</li>
              <li>• Interview &amp; group discussion training</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum & Careers */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Modules Covered
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Introduction to aviation &amp; airline industry</li>
              <li>• Aircraft familiarisation &amp; cabin layout</li>
              <li>• Passenger handling &amp; service excellence</li>
              <li>• In-flight food &amp; beverage service</li>
              <li>• Safety &amp; emergency procedures</li>
              <li>• First aid &amp; medical emergencies</li>
              <li>• Personality development &amp; image building</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Paths
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              After completing this cabin crew course at Akhurath Advanced
              Studies, you can apply for:
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Cabin crew / flight attendant roles</li>
              <li>• In-flight service associate</li>
              <li>• VIP guest relations roles in hospitality</li>
              <li>• Ground customer service with cabin crew advantage</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
