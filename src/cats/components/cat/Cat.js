import React from "react";
import PropTypes from "prop-types";

import useScore from "../../../pets/hooks/useScore";

const Cat = ({ name, initialScore }) => {
  const { score, increaseScore } = useScore(initialScore);

  return (
    <div>
      <p>{name}</p>
      <p>Score: {score}/10</p>
      <button onClick={increaseScore}>Increase score</button>
    </div>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  initialScore: PropTypes.number.isRequired,
};

export default Cat;

