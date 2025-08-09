import { useState, useEffect } from "react";

export default function useAdvice() {
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

  return { advice, fetchAdvice };
}
