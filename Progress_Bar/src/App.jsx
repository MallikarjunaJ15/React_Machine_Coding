import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (value >= 100) return;
    const timerId = setTimeout(() => {
      setValue((prev) => Math.min(prev + 4, 100));
    }, 300);

    return () => clearTimeout(timerId);
  }, [value]);

  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <div className="progress-container">
        <div
          className="progress-filler"
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <p className="progress-text">{value}% Complete</p>
    </div>
  );
}
