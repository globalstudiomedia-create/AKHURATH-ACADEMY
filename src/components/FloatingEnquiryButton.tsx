import { useState, useEffect } from "react";
import { Plane } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // 👈 change: no + sign, no spaces
const DEFAULT_MESSAGE = "Hi, I'd like to know more about your aviation & tech courses.";

export default function FloatingEnquiryButton() {
  const [showPopup, setShowPopup] = useState(true);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  // Hide popup after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-end gap-3">
      {/* Popup bubble */}
      {showPopup && (
        <div className="bg-blue-600 text-white text-sm md:text-base px-4 py-2 rounded-2xl shadow-lg animate-fade-in">
          Need help with enquiries? ✈️
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>

          {/* Main button */}
          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform cursor-pointer">
            <Plane className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
        </div>
      </a>
    </div>
  );
}
