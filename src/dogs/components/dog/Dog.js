import React from "react";
import PropTypes from "prop-types";

const Dog = ({ name, score }) => {
  const onClick = () => {
    score += 1;
    console.log(`This is your new score: ${score}`);
  };

  return (
    <div>
      <p>{name}</p>
      <p>Score: {score}/10</p>
      <button onClick={onClick}>Increase score</button>
    </div>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Dog;
