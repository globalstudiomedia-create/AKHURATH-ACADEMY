import AboutSection from '../components/About';
import SuccessStats from '../components/SuccessStats';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            About Akhurath
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            India&apos;s Aviation-First Institute for 12th-Pass Students
          </h1>
          <p className="text-base md:text-lg text-blue-100 leading-relaxed">
            Akhurath Aviation Institute is dedicated to preparing young aspirants for global
            airline and airport careers with disciplined, job-ready training.
          </p>
        </div>
      </section>

      {/* Re-use existing About section from home */}
      <AboutSection />

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
            <h2 className="text-2xl font-semibold text-blue-950 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower 12th-pass students with global-standard aviation training, strong
              communication skills, and professional grooming so they can confidently start
              careers with airlines, airports, and world-class service brands.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
            <h2 className="text-2xl font-semibold text-blue-950 mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be recognised as India&apos;s most trusted aviation-first institute, known for
              discipline, ethics, and consistently helping students build long-term careers in
              aviation and modern tech domains.
            </p>
          </div>
        </div>
      </section>

      {/* Success numbers + testimonials + CTA from your existing components */}
      <SuccessStats />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
