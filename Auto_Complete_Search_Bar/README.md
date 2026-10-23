# React Autocomplete Search Bar

A highly optimized, dependency-free autocomplete search bar built with React. This component focuses on network performance, utilizing debouncing and React lifecycle cleanup functions to prevent API spam and handle rapid user inputs efficiently.

## Features

- **Debounced Network Requests:** Delays API calls by 300ms while the user is actively typing to minimize server load.
- **Dynamic UI State:** Explicit tracking of dropdown visibility to ensure smooth opening and closing based on user interaction (typing vs. selecting).
- **Modern SaaS UI:** Styled with vanilla CSS to reflect a clean, professional B2B software aesthetic.

## The Core Logic

The application handles rapid keystrokes using a combination of `setTimeout` and React's `useEffect` cleanup function:

```javascript
useEffect(() => {
  const timerID = setTimeout(() => {
    fetchData(); // Fires only after typing stops for 300ms
  }, 300);

  // Clears the pending timeout if the user presses another key
  return () => {
    clearTimeout(timerID);
  };
}, [input]);
```
