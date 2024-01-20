import React from "react";

function Header({ onNext, onBack, dateDisplay }) {
  return (
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button onClick={onBack} id="backbutton">
          Back
        </button>
        <button onClick={onNext} id="nextbutton">
          Next
        </button>
      </div>
    </div>
  );
}

export default Header;
