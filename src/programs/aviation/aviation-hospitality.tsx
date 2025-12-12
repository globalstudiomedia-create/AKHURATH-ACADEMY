import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function AviationHospitalityPage() {
  useEffect(() => {
    document.title =
      'Aviation Hospitality & Travel Management Course | Akhurath Advanced Studies, India';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Hospitality &amp; Travel · Akhurath Advanced Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Aviation Hospitality &amp; Travel Management Course
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Build a versatile career in airlines, airports, hotels and travel
            companies with this specialised program.
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
              This program at Akhurath Advanced Studies blends aviation
              operations with hospitality and travel industry skills so that
              students can explore multiple sectors after completion.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              You&apos;ll understand how airlines, hotels, travel agencies and
              tourism boards work together to create seamless travel experiences.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Program Highlights
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Duration: 9–12 months</li>
              <li>• Aviation, hotel &amp; travel industry modules</li>
              <li>• Personality development &amp; business communication</li>
              <li>• Industrial exposure through projects &amp; case studies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Key Subjects
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Fundamentals of aviation &amp; airline operations</li>
              <li>• Front office &amp; guest relations</li>
              <li>• Food &amp; beverage basics for hospitality</li>
              <li>• Travel agency operations &amp; tour planning</li>
              <li>• Customer service &amp; service excellence</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Opportunities
            </h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Airline customer service / ground staff</li>
              <li>• Airport hospitality executive</li>
              <li>• Hotel front office associate</li>
              <li>• Travel consultant / tour coordinator</li>
              <li>• Cruise line or luxury hospitality roles</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
