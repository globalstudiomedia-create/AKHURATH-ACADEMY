import React, { useState } from 'react';
import SuccessStats from '../components/SuccessStats';
import CTABanner from '../components/CTABanner';

// main categories shown in first dropdown
const programCategories = [
  { value: 'aviation', label: 'Aviation Courses' },
  { value: 'ai', label: 'AI & Tech Courses' },
  { value: 'cyber', label: 'Cybersecurity & Ethical Hacking' },
];

// subcourses shown based on selected category
const subCourses: Record<string, string[]> = {
  aviation: [
    'Airport Ground Staff Training',
    'Cabin Crew & In-Flight Services',
    'Airport Customer Service & Passenger Handling',
    'Aviation Hospitality & Travel Management',
    'Airline Ticketing & GDS Operations',
  ],
  ai: [
    'AI Prompt Engineering',
    'Data Annotation & AI Model Support',
    'AI Tools & No-Code Automation',
    'Python for AI',
    'Digital Marketing with AI Tools',
    'AI Graphic Design & Content Creation',
  ],
  cyber: [
    'Cybersecurity Fundamentals',
    'Ethical Hacking Essentials',
    'SOC Analyst Level 1',
    'Network Security & Linux Admin',
    'Bug Bounty & Freelance Hacking',
    'Cyber Forensics & Incident Response',
  ],
};

export default function AdmissionsPage() {
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');

  const currentSubCourses = category ? subCourses[category] : [];

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCourse(''); // reset subcourse when category changes
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName')?.toString().trim();
    const mobile = formData.get('mobile')?.toString().trim();
    const email = formData.get('email')?.toString().trim();

    if (!fullName || !mobile || !email || !category || !course) {
      setError('Please fill in all required fields marked with *.');
      return;
    }

    // 👉 here you can send data to backend / Google Sheet / email later
    console.log('Enquiry submitted:', Object.fromEntries(formData.entries()));
    alert('Thank you! Your enquiry has been submitted. Our counsellor will contact you soon.');

    e.currentTarget.reset();
    setCategory('');
    setCourse('');
  };

  return (
    <main className="bg-white">
      <section className="pt-24 pb-12 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Admissions
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Admissions Open – Limited Seats for Founding Batch
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Akhurath welcomes 12th-pass students from any stream who are passionate about
            aviation, AI or cybersecurity careers.
          </p>
        </div>
      </section>

      {/* Admission Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Eligibility &amp; Documents
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>• 10+2 (any stream) from a recognised board</li>
              <li>• Basic English communication skills</li>
              <li>• Strong interest in aviation / service / tech careers</li>
              <li>• Government ID proof and recent photographs</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">
              Admission Process
            </h2>
            <ol className="space-y-2 text-gray-700 text-sm leading-relaxed list-decimal list-inside">
              <li>Submit enquiry or application form.</li>
              <li>Attend counselling session (online or on campus).</li>
              <li>Appear for basic assessment &amp; interview.</li>
              <li>Confirm admission by fee payment / EMI registration.</li>
            </ol>
          </div>

          {/* Application form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Apply for Counselling
            </h2>

            {error && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="mobile"
                    type="tel"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* City + State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    name="state"
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your state"
                  />
                </div>
              </div>

              {/* Program category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                >
                  <option value="">Select a category</option>
                  {programCategories.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subcourse based on category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specific Course <span className="text-red-500">*</span>
                </label>
                <select
                  name="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  disabled={!category}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white disabled:bg-slate-100 disabled:text-slate-400"
                >
                  <option value="">
                    {category ? 'Select a course' : 'Choose a program category first'}
                  </option>
                  {currentSubCourses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mode + start month */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Study Mode
                  </label>
                  <select
                    name="mode"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="on-campus">On-campus</option>
                    <option value="online">Online (where available)</option>
                    <option value="hybrid">Hybrid / Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Start Month
                  </label>
                  <input
                    name="startMonth"
                    type="month"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Any specific questions?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Share your career goals or questions about Akhurath Advanced Studies."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-amber-400 to-amber-600 text-blue-950 font-semibold py-2.5 rounded-lg hover:from-amber-500 hover:to-amber-700 transition"
              >
                Submit Enquiry
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Our counsellor will contact you within 24 hours to guide you through the next
                steps.
              </p>
            </form>
          </div>
        </div>
      </section>

      <SuccessStats />
      <CTABanner />
    </main>
  );
}
