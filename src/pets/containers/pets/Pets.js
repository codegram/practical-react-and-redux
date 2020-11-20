import React, { useEffect } from "react";

import usePetsStore from "../../hooks/usePetsStore";
import { DOG } from "../../store";
import Dog from "../../../dogs/components/dog/Dog";
import Cat from "../../../cats/components/cat/Cat";

const Pets = () => {
  const petsStore = usePetsStore();
  const pets = petsStore.getAllPets();
  const totalHugs = petsStore.getTotalHugs();

  useEffect(() => {
    const intervalId = setInterval(() => {
      petsStore.chooseNextHuggablePet();
    }, 15_000);
    petsStore.chooseNextHuggablePet();
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>Total hugs: {totalHugs} </p>
      {pets.map(({ kind, name, initialScore, huggable }) => (
        <div key={name}>
          {kind === DOG ? (
            <Dog key={name} name={name} initialScore={initialScore} />
          ) : (
            <Cat key={name} name={name} initialScore={initialScore} />
          )}
          <button onClick={() => petsStore.hugPet(name)} disabled={!huggable}>
            Give a hug to {name}!
          </button>
        </div>
      ))}
    </>
  );
};

export default Pets;
