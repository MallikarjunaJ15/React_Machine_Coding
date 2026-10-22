# React Multi-Step Form (Machine Coding Practice)

A multi-step user onboarding flow built with React and Tailwind CSS. This project focuses on solving common state-management and rendering challenges encountered during frontend machine coding rounds.

## Technical Highlights & Architecture

* **Derived State over `useState` for Validation:** 
  Form validation errors (e.g., `nameError`, `emailError`) are calculated dynamically during the render cycle rather than stored in a separate `useState`. This guarantees a pure render cycle and eliminates infinite re-render loops caused by state updates inside `if` blocks.
  
* **Object State Integrity:**
  Utilizes the ES6 spread operator (`...profileData`) within controlled component `onChange` handlers to ensure unmodified sibling properties are not overwritten when updating specific object keys.

* **API Payload Flattening:**
  The final `handleSubmit` function flattens the decoupled UI state (`profileData`, `interest`, `setting`) into a single, un-nested JavaScript object. This mirrors standard REST API payload expectations and prevents downstream `Cannot read properties of undefined` errors when rendering lists.

## Tech Stack
* React (Functional Components & Hooks)
* Tailwind CSS (Utility-first styling, Flexbox layouts)
