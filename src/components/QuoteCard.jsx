import {
  FaQuoteLeft,
  FaTwitter,
  FaSyncAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function QuoteCard({ quote, onNewQuote, theme, toggleTheme }) {
  // Helper to extract text and author
  const getQuoteText = () => (quote?.q ? quote.q : quote || "");
  const getQuoteAuthor = () => (quote?.a ? quote.a : "Unknown");

  return (
    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg max-w-2xl w-full p-8 text-center transition-all duration-500">

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow hover:scale-105 transition-transform duration-300"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-700" />
        )}
      </button>

      {quote ? (
        <div key={getQuoteText()} className="animate-fadeIn">
          <FaQuoteLeft className="text-4xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
            “{getQuoteText()}”
          </p>
          <p className="mt-4 text-lg italic text-gray-600 dark:text-gray-400">
            — {getQuoteAuthor()}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 italic">Loading...</p>
      )}

      <div className="mt-8 flex justify-center gap-4">
        {/* New Quote Button */}
        <button
          onClick={onNewQuote}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transition-transform duration-300"
        >
          <FaSyncAlt /> New Quote
        </button>

        {/* Twitter Button — works for both object and string quotes */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${getQuoteText()}" — ${getQuoteAuthor()}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-full shadow hover:scale-105 transition-transform duration-300 ${
            !quote ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <FaTwitter /> Tweet
        </a>
      </div>
    </div>
  );
}
