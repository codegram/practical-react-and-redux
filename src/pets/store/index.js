import { HUG_PET } from "./actions";

export const DOG = "dog";
export const CAT = "cat";

export const PETS_INITIAL_STATE = [
  { kind: DOG, name: "Boira", initialScore: 13, hugs: 0 },
  { kind: DOG, name: "Black", initialScore: 13, hugs: 0 },
  { kind: CAT, name: "Uhura", initialScore: 13, hugs: 0 },
];

const pets = (state = PETS_INITIAL_STATE, action) => {
  switch (action.type) {
    case HUG_PET: {
      const { name } = action.payload;
      return state.map((pet) => {
        if (pet.name === name) {
          return { ...pet, hugs: pet.hugs + 1 };
        }
        return pet;
      });
    }
    default: {
      return state;
    }
  }
};

export default pets;
