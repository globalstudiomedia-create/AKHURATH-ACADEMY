import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
  Launch your career with Akhurath Advanced Studies
</h1>


          <p className="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed">
            India's Aviation-first institution offering global-standard training for 12th-pass students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
  to="/programs/aviation"
  className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-block"
>
  Explore Courses
</Link>
            <Link
  to="/admissions"
  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-950 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 inline-block"
>
  Apply Now
</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
