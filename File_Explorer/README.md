# React Recursive File Explorer

A highly optimized, recursive file explorer component built in React. This project demonstrates how to handle infinitely nested JSON data structures and isolate state management using component recursion.

## Features
- **Infinite Nesting:** Utilizes a recursive `<Folder/>` component that can render file structures of any depth without hardcoded loops.
- **Isolated State:** Each directory manages its own `isOpen` state independently, preventing global re-renders and keeping the logic strictly encapsulated.
- **VS Code Aesthetic:** Styled with modern CSS, featuring hover states, active depth-indentation guides, and a sleek dark mode color palette.

## The Core Logic
The application handles the unknown depth of the file system by letting the component call itself:

```javascript
const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Base Case
  if (!data.isFolder) return <div className="file-item">{data.name}</div>;

  // Recursive Case
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{data.name}</div>
      {isOpen && (
        <div className="folder-contents">
          {data.items.map((item) => (
            <Folder data="{item}" key="{item.id}"/>
          ))}
        </div>
      )}
    </div>
  );
};