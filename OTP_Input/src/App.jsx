import { useState, useRef, useEffect } from "react";

export default function App() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  //Automatically focus to the first input
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="App">
      <div className="input-container" style={{ display: "flex", gap: "10px" }}>
        {otp.map((data, index) => (
          <input
            key={index}
            className="otp-input"
            ref={(ref) => (inputRefs.current[index] = ref)}
            value={data}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "20px",
              borderRadius: "8px",
              border: "2px solid #ccc",
              outline: "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
