import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  const gradientsLight = [
    "from-pink-200 via-purple-200 to-blue-200",
    "from-yellow-200 via-red-200 to-pink-200",
    "from-green-200 via-teal-200 to-blue-200",
    "from-indigo-200 via-purple-200 to-pink-200",
  ];

  const gradientsDark = [
    "from-gray-900 via-gray-800 to-gray-900",
    "from-slate-900 via-gray-800 to-black",
    "from-gray-800 via-gray-700 to-gray-900",
    "from-black via-gray-900 to-gray-800",
  ];

  const [bgGradient, setBgGradient] = useState(
    theme === "dark"
      ? gradientsDark[Math.floor(Math.random() * gradientsDark.length)]
      : gradientsLight[Math.floor(Math.random() * gradientsLight.length)]
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Change background when theme toggled
    const gradients = newTheme === "dark" ? gradientsDark : gradientsLight;
    setBgGradient(gradients[Math.floor(Math.random() * gradients.length)]);
  };

  return { theme, toggleTheme, bgGradient };
}
