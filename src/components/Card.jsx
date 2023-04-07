import { useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, name, color, level }) {
  return (
    <div className="Card">
      <img
        src="https://www.onlygfx.com/wp-content/uploads/2022/03/spotlight-stage-illumination-2.png"
        style={{
          position: "absolute",
          width: "185px",
          margin: "-70px -90px",
          zIndex: "-100",
        }}
      />
      <p className="name">
        <strong>{name}</strong>
      </p>
      <img src={`./src/assets/${color}.png`} />
      <p>Lv.{level}</p>
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default Card;
