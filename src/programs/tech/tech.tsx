import TechPrograms from '../../components/TechPrograms';
import CTABanner from '../../components/CTABanner';
export default function TechProgramsPage() {
  return (
    <main className="bg-white">
      <section className="pt-24 pb-12 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            AI & Tech Courses
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            AI & Modern Tech Programs for Fast Career Growth
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Dual-skill training for students who want aviation knowledge plus cutting-edge AI,
            automation and digital skills for the new job market.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <TechPrograms />
      </section>

      <CTABanner />
    </main>
  );
}
