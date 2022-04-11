import React from "react";

function Timeout() {
  return (
    <button
      className=" btn btn-primary  mb-3 mt-5 mx-5"
      onClick={function gameTime() {
        setTimeout(alert("Game over"), 10);
      }}
    >
      Start
    </button>
  );
}

export default Timeout;
