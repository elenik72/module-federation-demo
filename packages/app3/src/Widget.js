import React from "react";
import moment from "moment";

export default function Widget () {
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "#e53935",
        color: "#fff",
      }}
    >
      <h2 style={{ color: "#fff" }}>App 3</h2>
      <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
}
