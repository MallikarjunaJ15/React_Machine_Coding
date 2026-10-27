import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    {
      q: "WHAT IS THE VIRTUAL DOM?",
      a: "A lightweight JavaScript representation of the physical DOM. React uses it to compute diffs (reconciliation) and minimize computationally expensive browser repaints.",
      isOpen: false,
    },
    {
      q: "USEEFFECT VS USELAYOUTEFFECT?",
      a: "useEffect runs asynchronously after the browser paints, making it ideal for data fetching. useLayoutEffect runs synchronously before paint, used strictly for measuring DOM nodes to prevent visual flickering.",
      isOpen: false,
    },
    {
      q: "HOW DO YOU FIX PROP DRILLING?",
      a: "Passing data through multiple nested components that don't need it can be bypassed using the React Context API, state management libraries (Redux/Zustand), or component composition.",
      isOpen: false,
    },
  ]);

  const handleToggle = (index) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false },
      ),
    );
  };

  return (
    <div className="App">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div onClick={() => handleToggle(index)} className="accordion-header">
            <p className="question-text">{item.q}</p>
            <span className="icon">{item.isOpen ? "[-]" : "[+]"}</span>
          </div>

          {item.isOpen && (
            <div className="accordion-content">
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
