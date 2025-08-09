import useAdvice from "../hooks/useAdvice";
import ToggleTheme from "./ToggleTheme";
import { FaQuoteLeft, FaSyncAlt } from "react-icons/fa";

export default function MainContent({ setBg }) {
  const { advice, fetchAdvice } = useAdvice();

  return (
    <div
      className="relative w-full max-w-xl mx-auto 
      bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg
      border border-white/30 dark:border-gray-700/30
      p-8 rounded-2xl shadow-lg transition-colors duration-500"
    >
      {/* Floating toggle button */}
      <div className="absolute -top-12 right-0">
        <ToggleTheme setBg={setBg} />
      </div>

      {advice && (
        <div className="flex flex-col items-center text-center">
          <FaQuoteLeft className="text-indigo-500 dark:text-indigo-400 text-3xl mb-4" />
          <p
            className="text-lg md:text-xl italic font-medium 
            text-gray-800 dark:text-gray-200 transition-opacity duration-500"
          >
            “{advice}”
          </p>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button
          onClick={fetchAdvice}
          className="px-6 py-2 rounded-lg bg-indigo-500 text-white shadow-md 
            hover:bg-indigo-600 flex items-center gap-2 transition-all duration-300"
        >
          <FaSyncAlt className="animate-spin-slow text-white" />
          New Advice
        </button>
      </div>
    </div>
  );
}
