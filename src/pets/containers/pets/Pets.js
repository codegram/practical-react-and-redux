import React from "react";

import usePetsStore from "../../hooks/usePetsStore";
import { DOG } from "../../store";
import Dog from "../../../dogs/components/dog/Dog";
import Cat from "../../../cats/components/cat/Cat";

const Pets = () => {
  const petsStore = usePetsStore();
  const pets = petsStore.getAllPets();
  const totalHugs = petsStore.getTotalHugs();

  return (
    <>
      <p>Total hugs: {totalHugs} </p>
      {pets.map(({ kind, name, initialScore }) => (
        <div key={name}>
          {kind === DOG ? (
            <Dog key={name} name={name} initialScore={initialScore} />
          ) : (
            <Cat key={name} name={name} initialScore={initialScore} />
          )}
          <button onClick={() => petsStore.hugPet(name)}>
            Give a hug to {name}!
          </button>
        </div>
      ))}
    </>
  );
};

export default Pets;
