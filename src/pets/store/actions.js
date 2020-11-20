export const HUG_PET = "HUG_PET";

export const hugPet = (name) => {
  return {
    type: HUG_PET,
    payload: {
      name,
    },
  };
};
