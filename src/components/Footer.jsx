import { FaGithub } from "react-icons/fa";

export default function Footer({ theme }) {
  return (
    <footer className="text-center text-sm py-4 text-bold">
      <div
        className={`flex justify-center items-center gap-2 border-t pt-3 ${
          theme === "dark" ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-700"
        }`}
      >
        <a
          href="https://github.com/SRCarlo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <FaGithub className="text-lg" />
          <span>Designed & Built by SRCalo</span>
        </a>
      </div>
    </footer>
  );
}
