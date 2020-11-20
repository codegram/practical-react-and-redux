import { useSelector, useDispatch } from "react-redux";

import * as fromActions from "../store/actions";

const usePetsStore = () => {
  const pets = useSelector((state) => state.pets);
  const dispatch = useDispatch();

  return {
    getAllPets() {
      return pets;
    },
    getTotalHugs() {
      return pets.reduce((hugs, pet) => hugs + pet.hugs, 0);
    },
    hugPet(name) {
      dispatch(fromActions.hugPet(name));
    },
    chooseNextHuggablePet() {
      dispatch(fromActions.chooseNextHuggablePet(pets));
    },
  };
};

export default usePetsStore;
