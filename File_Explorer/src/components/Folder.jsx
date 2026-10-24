import React, { useState } from "react";

const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!data.isFolder) {
    return (
      <div className="file-item">
        <span>📄</span> {data.name}
      </div>
    );
  }

  return (
    <div className="folder-container">
      <div onClick={() => setIsOpen(!isOpen)} className="folder-item">
        <span>{isOpen ? "📂" : "📁"}</span> {data.name}
      </div>

      {isOpen && (
        <div className="folder-contents">
          {data.items.map((item) => (
            <Folder key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
