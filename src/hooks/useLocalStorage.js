import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    try {
      if (jsonValue !== null) return JSON.parse(jsonValue);

      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    } catch (error) {
      localStorage.removeItem(key);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
