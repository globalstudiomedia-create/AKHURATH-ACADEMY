import AviationPrograms from '../../components/AviationPrograms';
import CTABanner from '../../components/CTABanner';

export default function AviationProgramsPage() {
  return (
    <main className="bg-white">
      <section className="pt-24 pb-12 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Aviation Programs
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Professional Aviation Courses at Akhurath
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Specially designed for 12th-pass students who want to build careers as airport
            ground staff, cabin crew, airline service professionals and more.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <AviationPrograms />
      </section>

      <CTABanner />
    </main>
  );
}
