import { useEffect } from 'react';
import CTABanner from '../../components/CTABanner';

export default function AIGraphicDesignPage() {
  useEffect(() => {
    document.title =
      'AI Graphic Design Course (Canva, Midjourney, Photoshop AI) in Kerala | Akhurath Advanced Studies';
  }, []);

  return (
    <main className="bg-white">
      <section className="pt-24 pb-10 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            AI Design · Akhurath Advanced Studies, Kerala
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            AI Graphic Design (Canva + Midjourney + Photoshop AI)
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn to create professional posters, social media creatives and
            brand visuals using AI-powered design tools.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              What You Will Design
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Brand posts and stories for Instagram &amp; Facebook</li>
              <li>Event posters and flyers for colleges in Kerala</li>
              <li>Thumbnails &amp; banners for YouTube and websites</li>
              <li>Concept art and moodboards using AI images</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Tools Covered
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Canva for layout &amp; branding</li>
              <li>Midjourney / similar AI image generators</li>
              <li>Photoshop AI features for editing &amp; compositing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            Career &amp; Freelance Opportunities
          </h2>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>Social media designer for agencies &amp; brands</li>
            <li>Freelance poster / thumbnail designer</li>
            <li>AI design support for marketing teams in Kerala</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            Akhurath Advanced Studies helps students build a portfolio of AI
            design work that can be showcased to clients and employers.
          </p>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
