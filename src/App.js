import React from "react";
import Dog from "./dogs/components/dog/Dog";

const App = () => {
  return (
    <>
      <Dog name="Boira" score={13} />
      <Dog name="Black" score={13} />
    </>
  );
};

export default App;
