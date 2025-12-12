import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function AIToolsNoCodePage() {
  useEffect(() => {
    document.title =
      'AI Tools & No-Code Automation Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            AI &amp; Automation · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            AI Tools &amp; No-Code Automation (1–2 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn to automate everyday tasks, marketing, reports and workflows
            for businesses using AI tools and no-code platforms.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              What This Course Covers
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Overview of popular AI productivity tools</li>
              <li>No-code platforms for automation (Zapier, Make, etc.)</li>
              <li>Automating emails, reports and social media</li>
              <li>Building simple internal tools without coding</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Ideal For
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Students who want to help local Kerala businesses go digital</li>
              <li>Working professionals wanting to save time with automation</li>
              <li>Freelancers who want to offer AI automation services</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            Real-World Projects You Will Build
          </h2>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>Automatic lead capture &amp; follow-up system</li>
            <li>AI-generated social media calendar &amp; posting workflow</li>
            <li>Client feedback form with auto-summary in Google Sheets</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            By the end of this course, you will be able to demonstrate live
            automation projects to potential employers and clients in Kerala.
          </p>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
