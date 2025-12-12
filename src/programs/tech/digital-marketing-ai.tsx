import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function DigitalMarketingAIPage() {
  useEffect(() => {
    document.title =
      'Digital Marketing with AI Tools Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            AI Marketing · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Digital Marketing with AI Tools (1–3 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Use AI to plan content, write ads, design creatives and analyse
            campaigns for brands and businesses across Kerala.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Course Modules
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Basics of social media &amp; digital marketing</li>
              <li>Using AI to research topics &amp; keywords</li>
              <li>Creating posts, captions &amp; ad copies with AI</li>
              <li>Designing creatives with AI image tools</li>
              <li>Reporting &amp; optimisation using analytics</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Who Can Join?
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Students who want to become digital marketers</li>
              <li>Freelancers and small business owners in Kerala</li>
              <li>Traditional marketers who want AI-powered skills</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            Career Opportunities After This Course
          </h2>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>Junior digital marketer with AI skills</li>
            <li>Social media manager / content strategist</li>
            <li>Freelance marketing support for Kerala brands</li>
          </ul>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
