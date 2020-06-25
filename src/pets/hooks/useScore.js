import { useState } from "react";

const useScore = (baseScore) => {
  const [score, setScore] = useState(baseScore);

	return {
    score,
		increaseScore: () => {
		  setScore(score + 1);
		  console.log(`This is your new score: ${score}`);
    }
  }
};

export default useScore;
