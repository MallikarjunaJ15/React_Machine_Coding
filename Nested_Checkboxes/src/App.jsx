import { useState } from "react";
import NestedComponent from "./components/NestedComponent";
import { checkboxData } from "./components/checkboxData";

export default function App() {
  const [data, setData] = useState(checkboxData);

  // RULE 1: THE DOWNWARD RIPPLE
  // A helper function that takes a node and recursively forces it,
  // and all its descendants, to match the parent's new boolean status.
  const forceStatusDownwards = (node, newStatus) => {
    // If it has no children, just return a new copy of the node with the new status
    if (!node.children) {
      return { ...node, isChecked: newStatus };
    }

    // If it has children, apply the status to the parent, and recursively map the children
    return {
      ...node,
      isChecked: newStatus,
      children: node.children.map((child) =>
        forceStatusDownwards(child, newStatus)
      ),
    };
  };

  // RULE 2: THE SEARCH & UPWARD RIPPLE
  const updateTree = (node, clickedId) => {
    // 1. THE TARGET: We found the exact checkbox the user clicked!
    if (node.id === clickedId) {
      const newStatus = !node.isChecked;
      // Trigger Rule 1: Flip it, and force all its descendants to match
      return forceStatusDownwards(node, newStatus);
    }

    // 2. THE SEARCH: If this is not the target, but it has children, search deeper.
    if (node.children) {
      // Recursively dive into the children
      const updatedChildren = node.children.map((child) =>
        updateTree(child, clickedId)
      );

      // 3. THE UPWARD RIPPLE: As the recursion finishes and bubbles back up,
      // the parent checks its newly updated children.
      // Array.every() returns true ONLY if every single child is checked.
      const allChildrenChecked = updatedChildren.every(
        (child) => child.isChecked
      );

      // Return a new copy of the parent with its newly calculated status
      return {
        ...node,
        isChecked: allChildrenChecked,
        children: updatedChildren,
      };
    }

    // 4. BASE CASE: Not the target, and no children. Just return the node untouched.
    return node;
  };

  const handleToggle = (clickedId) => {
    console.log("clicked id is", clickedId);
    // Start the recursion from the root node, and update the master state with the result
    const newMasterTree = updateTree(data, clickedId);
    setData(newMasterTree);
  };

  return (
    <div className="App">
      <NestedComponent checkboxData={data} handleToggle={handleToggle} />
    </div>
  );
}
