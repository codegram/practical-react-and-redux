import { getRandomPet } from "../services/fair-service";

export const HUG_PET = "HUG_PET";
export const CHOOSE_HUGGABLE_PET = "CHOOSE_HUGGABLE_PET";

export const hugPet = (name) => {
  return {
    type: HUG_PET,
    payload: {
      name,
    },
  };
};

export const chooseNextHuggablePet = (pets) => async (dispatch) => {
  const petChosen = await getRandomPet(pets);
  dispatch({
    type: CHOOSE_HUGGABLE_PET,
    payload: {
      petChosen,
    },
  });
};
