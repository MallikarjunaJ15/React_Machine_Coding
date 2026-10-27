import React from "react";

const NestedComponent = ({ checkboxData, handleToggle }) => {
  return (
    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
      <div
        className="input-container"
        style={{ display: "flex", gap: "8px", alignItems: "center" }}
      >
        <input
          type="checkbox"
          checked={checkboxData.isChecked}
          onChange={() => handleToggle(checkboxData.id)}
        />
        <p style={{ margin: 0 }}>{checkboxData.name}</p>
      </div>

      {checkboxData.children?.map((child) => (
        <NestedComponent
          key={child.id}
          checkboxData={child}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default NestedComponent;
