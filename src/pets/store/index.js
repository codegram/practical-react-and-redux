import { HUG_PET, CHOOSE_HUGGABLE_PET } from "./actions";

export const DOG = "dog";
export const CAT = "cat";

export const PETS_INITIAL_STATE = [
  { kind: DOG, name: "Boira", initialScore: 13, hugs: 0, huggable: false },
  { kind: DOG, name: "Black", initialScore: 13, hugs: 0, huggable: false },
  { kind: CAT, name: "Uhura", initialScore: 13, hugs: 0, huggable: false },
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
    case CHOOSE_HUGGABLE_PET: {
      const { petChosen } = action.payload;
      return state.map((pet) => {
        return { ...pet, huggable: pet.name === petChosen.name };
      });
    }
    default: {
      return state;
    }
  }
};

export default pets;
