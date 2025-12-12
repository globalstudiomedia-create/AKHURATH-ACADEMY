import { Link } from "react-router-dom";
import CTABanner from '../../components/CTABanner';

const courses = [
  {
    title: 'Cybersecurity Fundamentals',
    duration: '1–3 months',
    path: '/programs/cyber/cybersecurity-fundamentals',
  },
  {
    title: 'Ethical Hacking Essentials',
    duration: '2–4 months',
    path: '/programs/cyber/ethical-hacking-essentials',
  },
  {
    title: 'SOC Analyst Level 1',
    duration: '2–4 months',
    path: '/programs/cyber/soc-analyst-level-1',
  },
  {
    title: 'Network Security & Linux Admin',
    duration: '3–6 months',
    path: '/programs/cyber/network-security-linux-admin',
  },
  {
    title: 'Bug Bounty & Freelance Hacking',
    duration: '2–4 months',
    path: '/programs/cyber/bug-bounty-freelance-hacking',
  },
  {
    title: 'Cyber Forensics & Incident Response',
    duration: '3–6 months',
    path: '/programs/cyber/cyber-forensics-incident-response',
  },
];

export default function CyberProgramsPage() {
  return (
    <main className="bg-white">
      <section className="pt-24 pb-12 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Cybersecurity & Ethical Hacking
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Job-Ready Cybersecurity & Ethical Hacking Courses
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Learn how to protect systems, find vulnerabilities ethically, and prepare for
            high-growth careers in cybersecurity.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.title}
                to={course.path}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer block"
              >
                <h2 className="text-lg font-semibold text-blue-950 mb-2">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Duration: <span className="font-medium">{course.duration}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Learn core concepts, hands-on tools and industry practices with guidance
                  from experienced cybersecurity trainers.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
