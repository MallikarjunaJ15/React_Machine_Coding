import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      <div className="card">
        {data.map((d) => (
          <div className="card-data" key={d?.id}>
            <p>{d?.availabilityStatus}</p>
            <p>{d?.brand || "Brand"}</p>
            <p>{d?.price}</p>
            <p>{d?.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
