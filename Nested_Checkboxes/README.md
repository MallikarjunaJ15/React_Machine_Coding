# React Recursive Checkbox Tree

A highly optimized, recursive checkbox component built in React. This project demonstrates advanced two-way state communication across deeply nested JSON data structures using Depth-First Search (DFS) algorithms.

## Features

- **Downward State Propagation:** Selecting or deselecting a parent node automatically cascades the strict boolean state to all deeply nested descendants.
- **Upward State Evaluation:** Children automatically update their ancestors. A parent dynamically calculates its checked status based on the collective state of its children using array evaluations.
- **Centralized State Management:** Utilizes a single source of truth at the root level, ensuring perfect UI synchronization without isolated state traps.
- **Custom UI/UX:** Features a fully custom CSS checkbox implementation with SVG-style `clip-path` animations and a premium dark mode aesthetic.

## The Core Logic

The application traverses the nested JSON tree utilizing a pure recursive function to maintain immutability for React's render engine:

```javascript
const updateTree = (node, clickedId) => {
  // 1. Target Found: Cascade downwards
  if (node.id === clickedId) {
    return forceStatusDownwards(node, !node.isChecked);
  }

  // 2. Search deeper
  if (node.children) {
    const updatedChildren = node.children.map((child) =>
      updateTree(child, clickedId),
    );

    // 3. Upward Ripple: Parent calculates state based on updated children
    const allChildrenChecked = updatedChildren.every(
      (child) => child.isChecked,
    );

    return {
      ...node,
      isChecked: allChildrenChecked,
      children: updatedChildren,
    };
  }

  return node;
};
```
