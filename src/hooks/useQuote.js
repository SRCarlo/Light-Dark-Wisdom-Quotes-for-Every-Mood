import useAdvice from "./hooks/useAdvice";

export default function App() {
  const { advice, fetchAdvice } = useAdvice();

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Random Advice</h1>

      {advice && (
        <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-300 transition-colors">
          “{advice}”
        </p>
      )}

      <button
        onClick={fetchAdvice}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all"
      >
        Get New Advice
      </button>
    </div>
  );
}
