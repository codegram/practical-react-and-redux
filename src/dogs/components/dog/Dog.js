import React from "react";
import PropTypes from "prop-types";

import useScore from "../../../pets/hooks/useScore";

const Dog = ({ name, initialScore }) => {
  const { score, increaseScore } = useScore(initialScore);

  return (
    <div>
      <p>{name}</p>
      <p>Score: {score}/10</p>
      <button onClick={increaseScore}>Increase score</button>
    </div>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  initialScore: PropTypes.number.isRequired,
};

export default Dog;
