import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const [chips, setChips] = useState(() => {
    const savedChips = localStorage.getItem("chips");
    try {
      if (savedChips) {
        console.error("Failed to parse chips from local storage:", error);
        return JSON.parse(savedChips);
      }
    } catch (error) {
      return [];
    }
    return [];
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (Number(input)) return;
      const trimmedInput = input.trim();
      if (trimmedInput) {
        setChips((prev) => [...prev, trimmedInput]);
        setInput("");
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("chips", JSON.stringify(chips));
  }, [chips]);

  const handleDelete = (targetIndex) => {
    setChips((prev) => prev.filter((_, i) => i !== targetIndex));
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a skill and press Enter..."
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        {chips.map((c, index) => (
          <div
            key={index}
            className="chips-container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "4px 12px",
              background: "#334155",
              borderRadius: "16px",
            }}
          >
            <p className="chip" style={{ margin: 0 }}>
              {c}
            </p>
            <button
              onClick={() => handleDelete(index)}
              className="chip-delete"
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "#f87171",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
