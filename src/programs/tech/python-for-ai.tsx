import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function PythonForAIPage() {
  useEffect(() => {
    document.title =
      'Python for AI Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Programming · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Python for AI (4–6 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn Python from scratch and build a strong base for AI, data
            science and automation projects.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Why Python for AI?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Python is the most widely used language in AI, and this course is
              designed for beginners from Kerala with no prior coding experience.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Start from absolute basics</li>
              <li>Move into data handling and libraries</li>
              <li>End with mini AI / data projects</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Topics Covered
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Python syntax, loops, functions and modules</li>
              <li>Working with files, CSV and JSON data</li>
              <li>Intro to NumPy, Pandas and Matplotlib</li>
              <li>Basic ML concepts with scikit-learn</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            Outcomes for Students in Kerala
          </h2>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>Ability to read and write Python code confidently</li>
            <li>Foundation to move into AI, data science or automation</li>
            <li>Portfolio of small Python + AI mini projects</li>
          </ul>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
