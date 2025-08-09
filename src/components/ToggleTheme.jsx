import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ToggleTheme({ setBg }) {
  const lightGradients = [
    "bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200",
    "bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200",
    "bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200",
    "bg-gradient-to-r from-green-200 via-lime-200 to-yellow-200",
    "bg-gradient-to-r from-orange-200 via-red-200 to-pink-200",
  ];

  const darkGradients = [
    "bg-gradient-to-r from-purple-900 via-indigo-900 to-black",
    "bg-gradient-to-r from-gray-900 via-blue-900 to-black",
    "bg-gradient-to-r from-black via-green-900 to-emerald-900",
    "bg-gradient-to-r from-zinc-900 via-red-900 to-black",
    "bg-gradient-to-r from-slate-900 via-indigo-900 to-black",
  ];

  const lightToggleColors = [
    "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400",
    "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400",
    "bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400",
    "bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400",
    "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400",
  ];

  const darkToggleColors = [
    "bg-gradient-to-r from-purple-700 via-indigo-700 to-black",
    "bg-gradient-to-r from-gray-700 via-blue-700 to-black",
    "bg-gradient-to-r from-black via-green-700 to-emerald-800",
    "bg-gradient-to-r from-zinc-700 via-red-700 to-black",
    "bg-gradient-to-r from-slate-700 via-indigo-700 to-black",
  ];

  const [isDark, setIsDark] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);

  // Apply theme changes when dark mode or gradient changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    if (!isDark) {
      setBg(lightGradients[gradientIndex]);
    } else {
      setBg(darkGradients[gradientIndex]);
    }
  }, [isDark, gradientIndex]);

  const handleToggle = () => {
    const randomIndex = Math.floor(Math.random() * lightGradients.length);
    setGradientIndex(randomIndex);
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-5 right-5 p-3 rounded-full shadow-lg text-white hover:scale-105 transition-all duration-500 ${
        isDark ? darkToggleColors[gradientIndex] : lightToggleColors[gradientIndex]
      }`}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
