export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="pt-24 pb-12 bg-blue-950 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch with Akhurath
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Have questions about courses, fees or admissions? Our team is ready to help you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid gap-10 md:grid-cols-2">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Visit our campus or reach out to us via phone, email or WhatsApp for counselling
              and admissions support.
            </p>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Address:</span> 123 Aviation Plaza, Airport Road,
                New Delhi – 110037, India
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91-98765-43210
              </p>
              <p>
                <span className="font-semibold">Email:</span> admissions@akhurath.edu
              </p>
              <p>
                <span className="font-semibold">Office Hours:</span> Mon – Sat, 9:30 AM to 6:30 PM
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-3">
              Connect on Social
            </h2>
            <p className="text-sm text-gray-700">
              Follow us for updates on new batches, events and career tips.
            </p>
            <div className="flex gap-3 mt-3 text-sm text-blue-950">
              <span className="px-3 py-1 rounded-full bg-slate-100">Instagram</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">Facebook</span>
              <span className="px-3 py-1 rounded-full bg-slate-100">YouTube</span>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-950 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-blue-950 font-semibold py-2.5 rounded-lg hover:from-amber-500 hover:to-amber-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
