export async function getPokemon() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon')
  return data.json()
}
