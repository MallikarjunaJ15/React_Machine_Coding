# React Accordion Component (Multi & Single Open)

A highly optimized, production-ready Accordion component built in React. This project demonstrates centralized state management and immutable array operations to seamlessly handle both "Multiple Open" and "Single Open" constraints.

## Features
- **Centralized State Management:** State is lifted to the parent component, allowing sibling items to communicate and react to each other's status.
- **Single-Open Capability:** Selecting a new accordion item automatically forces all other open items to close in a single render cycle.
- **Immutable Operations:** Utilizes `.map()` and the ES6 spread operator to safely mutate state arrays without breaking React's reconciliation engine.
- **Premium UI/UX:** Styled with a modern B2B SaaS dark theme, featuring structured padding, hover states, and smooth color transitions.

## The Core Logic
By mapping over the centralized state, we can easily toggle the target item while simultaneously forcing all other items closed:

```javascript
const handleToggle = (index) => {
  setData((prevData) =>
    prevData.map((item, i) =>
      i === index 
        ? { ...item, isOpen: !item.isOpen } // Toggle the clicked item
        : { ...item, isOpen: false }        // Force close all other items
    )
  );
};