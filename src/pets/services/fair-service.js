const BASE_URL = "https://www.random.org/integers";

const buildRandomServiceUrl = (max) => {
  return `${BASE_URL}/?num=1&min=0&max=${max}&col=1&base=10&format=plain&rnd=new`;
};

const fallBackRandomPet = (pets) => {
  return pets[Math.ceil(Math.random() * pets.length - 1)];
};

export const getRandomPet = async (pets) => {
  try {
    const response = await fetch(buildRandomServiceUrl(pets.length - 1));
    if (response.ok) {
      const random = await response.json();
      return pets[random];
    }
    return fallBackRandomPet(pets);
  } catch (e) {
    console.error(`Something bad happened: ${e}`);
    // Adding a fallback in case the previous request fails
    return fallBackRandomPet(pets);
  }
};
