import React from "react";
import HomesItem from "./HomesItem";

function HomesList({ homes }) {
  return (
    <div className="homes-container">
      {homes.map((home) => (
        <HomesItem key={home.id} home={home} />
      ))}
    </div>
  );
}

export default HomesList;