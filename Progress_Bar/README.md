# React Dynamic Progress Bar

A highly optimized, dependency-free progress bar component built in React. This project demonstrates how to safely manage rapid interval updates and bridge React state directly to CSS for smooth UI animations.

## Features
- **Memory-Safe Timers:** Implements strict `useEffect` cleanup functions to prevent memory leaks and ghost timers during rapid state changes.
- **Dynamic CSS Injection:** Bridges React state to the DOM using inline style width calculations, combined with CSS transitions for smooth visual interpolation.
- **Accessible (a11y):** Fully compliant with WAI-ARIA standards using `role`, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes.
- **Modern UI:** Styled with a premium dark-mode aesthetic and gradient filler.

## The Core Logic
The application ensures that timers are cleaned up immediately and state never overshoots the 100% maximum:

```javascript
useEffect(() => {
  if (value >= 100) return; // Guard clause
  
  const timerId = setTimeout(() => {
    setValue((prev) => Math.min(prev + 4, 100)); // Prevents overshooting
  }, 300);

  return () => clearTimeout(timerId); // Memory cleanup
}, [value]);