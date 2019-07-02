import React from "react";

function LongAndLatResult(props) {
  let { city, state } = props;
  let result = `${city}, ${state}`;
  return (
    <div>
      <hr />
      <h2 style={{ paddingBottom: 30 }}>Results</h2>
      <p>{city === "" ? null : result}</p>
    </div>
  );
}

export default LongAndLatResult;
