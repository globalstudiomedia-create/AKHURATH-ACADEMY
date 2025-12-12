import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function AIPromptEngineeringPage() {
  useEffect(() => {
    document.title =
      'AI Prompt Engineering Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            AI Courses · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            AI Prompt Engineering Course (1–3 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn how to talk to AI tools like ChatGPT, Midjourney and Claude
            professionally and build job-ready workflows for businesses in Kerala and abroad.
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
              This short-term AI Prompt Engineering program at Akhurath Advanced
              Studies is designed for students in Kerala who want to use AI tools
              for content, marketing, design, education and business automation –
              without needing heavy coding.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              You will learn how to design powerful prompts, build repeatable
              workflows and use AI safely and ethically for real-world projects.
            </p>

            <h3 className="text-lg font-semibold text-blue-950 mt-6 mb-2">
              Who is this course for?
            </h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>12th-pass students looking for future-ready skills</li>
              <li>College students and freshers from any stream</li>
              <li>Content creators, freelancers and digital marketers</li>
            </ul>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Key Highlights
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Duration: 1–3 months (project-based learning)</li>
              <li>Hands-on practice with leading AI tools</li>
              <li>Focus on real assignments for Kerala businesses</li>
              <li>Portfolio of AI-generated work by course end</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modules & Careers */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              What You&apos;ll Learn
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Prompt basics: roles, context, constraints and examples</li>
              <li>Prompt patterns for content, coding and research</li>
              <li>Building reusable AI workflows for daily tasks</li>
              <li>Using AI for writing, editing and idea generation</li>
              <li>Ethical &amp; safe usage of AI in India</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Opportunities
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              After completing this AI Prompt Engineering course at Akhurath
              Advanced Studies, students in Kerala can work as:
            </p>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>AI content creator / AI-assisted copywriter</li>
              <li>Prompt engineer for agencies & start-ups</li>
              <li>Freelancer providing AI automation services</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
