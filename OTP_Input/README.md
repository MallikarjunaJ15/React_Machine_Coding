# React OTP Input Component

A highly optimized, production-ready One-Time Password (OTP) input component built in React. This project demonstrates advanced DOM manipulation, focus management, and keyboard event handling.

## Features
- **Auto-Forward Navigation:** Automatically shifts focus to the next input field upon valid entry.
- **Smart Backspace Handling:** Uses `onKeyDown` listeners to detect backspace presses on empty inputs, seamlessly shifting focus to the previous field.
- **Auto-Mount Focus:** Automatically focuses the first input field on initial render via `useEffect`.
- **Premium UI/UX:** Styled with a modern B2B SaaS dark theme, featuring subtle transitions, focus rings, and hover states.

## The Core Logic
Bridging React state with physical DOM focus requires tracking each input via a `useRef` array. The backspace edge case is handled by intercepting the native keyboard event:

```javascript
const handleKeyDown = (e, index) => {
  // If Backspace is pressed on an empty input, focus the previous input
  if (e.key === "Backspace" && !otp[index] && index > 0) {
    inputRefs.current[index - 1].focus();
  }
};