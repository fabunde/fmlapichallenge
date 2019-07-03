import React from "react";
import PropTypes from "prop-types";

function LatAndLongResult(props) {
  let { city, state } = props;
  let result = `${city}, ${state}`;

  if (!props.city || !props.city) {
    return null;
  }

  return (
    <div className="ltlgresult">
      <hr />
      <h2>Results</h2>
      <p>{city === "" ? null : result}</p>
    </div>
  );
}

LatAndLongResult.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string
};

export default LatAndLongResult;
