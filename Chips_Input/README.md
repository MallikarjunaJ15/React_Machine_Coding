# React Persistent Chips (Tags) Input

A production-ready, highly optimized Chips/Tags input component built in React. This project demonstrates performance-focused browser storage synchronization, lazy state initialization, and immutable array mutations.

## Features
- **Browser Persistence:** Automatically saves and restores chips using `localStorage` so user data survives page reloads.
- **Lazy Initialization:** Utilizes React's `useState` callback pattern to prevent expensive synchronous storage reads on subsequent re-renders.
- **Input Sanitization:** Automatically trims whitespace and blocks empty submissions.
- **Keyboard Navigation:** Native `Enter` key support for rapid tag creation.
- **Premium UI/UX:** Styled with a modern B2B SaaS dark theme, featuring active focus rings, pill-shaped chips, and targeted hover states.

## The Core Logic
Synchronizing state with `localStorage` can cause severe performance bottlenecks if not handled correctly. This component uses lazy initialization to read the data only once on mount, and a strictly dependent `useEffect` to write data only on mutation:

```javascript
// 1. Lazy Initialization (Runs only on mount)
const [chips, setChips] = useState(() => {
  const savedChips = localStorage.getItem("chips");
  return savedChips ? JSON.parse(savedChips) : [];
});

// 2. Strict Syncing (Runs only when chips array changes)
useEffect(() => {
  localStorage.setItem("chips", JSON.stringify(chips));
}, [chips]);