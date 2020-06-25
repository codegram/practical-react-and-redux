import React from "react";
import Dog from "./dogs/components/dog/Dog";
import Cat from "./cats/components/cat/Cat";

const App = () => {
  return (
    <>
      <Dog name="Boira" initialScore={13} />
      <Dog name="Black" initialScore={13} />
      <Cat name="Uhura" initialScore={13} />
    </>
  );
};

export default App;
