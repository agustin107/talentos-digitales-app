export const getPokemones = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');

  if (response.ok) {
    const data = await response.json();

    return data.results;
  } else {
    return [];
  }
};
