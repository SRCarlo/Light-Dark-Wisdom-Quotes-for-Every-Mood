import { useState, useEffect } from "react";
import Title from "./components/Title";
import ToggleTheme from "./components/ToggleTheme";
import Footer from "./components/Footer";
import { FaRandom } from "react-icons/fa";

export default function App() {
  const [bg, setBg] = useState("");
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-between items-center px-4 py-8 transition-colors duration-500 ${bg}`}
    >
      {/* Toggle at top right */}
      <ToggleTheme setBg={setBg} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center">
        <Title />
        {advice && (
          <p className="max-w-lg text-lg md:text-xl text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out">
            {advice}
          </p>
        )}
        <button
          onClick={fetchAdvice}
          className="mt-6 px-6 py-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <FaRandom />
          New Advice
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
