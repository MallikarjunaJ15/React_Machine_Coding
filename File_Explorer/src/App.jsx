import { useState } from "react";
import explorer from "./explorer";
import Folder from "./components/Folder";
export default function App() {
  return (
    <div className="App">
      {explorer?.map((data) => (
        <Folder data={data} />
      ))}
    </div>
  );
}
