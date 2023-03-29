export async function getPokemon(pokemonId) {
  // const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  const data = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemonId}' + pokemonId)
  return data.json()
}
