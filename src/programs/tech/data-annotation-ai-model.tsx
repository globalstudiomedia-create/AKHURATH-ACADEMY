import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function DataAnnotationPage() {
  useEffect(() => {
    document.title =
      'Data Annotation & AI Model Training Course in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            AI Courses · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Data Annotation + AI Model Training (1–2 Months)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn how AI models are trained using labelled data and start working
            in entry-level AI support and annotation roles.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Course Overview
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              This course introduces students in Kerala to the real workflow
              behind AI: collecting data, cleaning it, annotating it and using it
              to train models for vision, text and audio tasks.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              You will work with practical tools used by AI companies for
              annotation and quality control.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Skills You Will Gain
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Understanding datasets &amp; labelling requirements</li>
              <li>Image, text and audio annotation basics</li>
              <li>Quality checking &amp; guidelines compliance</li>
              <li>Intro to training simple ML / AI models</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Tools &amp; Platforms
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Popular annotation platforms &amp; open-source tools</li>
              <li>Google Sheets / Excel for dataset tracking</li>
              <li>Basic use of Python notebooks for model demos</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Career Pathways
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Data annotation specialist</li>
              <li>AI operations / AI data support executive</li>
              <li>Stepping stone towards ML engineer roles</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              Akhurath Advanced Studies trains students in Kerala to work with
              remote and on-site AI projects from companies across India.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
