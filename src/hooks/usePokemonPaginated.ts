import { useEffect, useRef } from 'react'
import { pokemonApi } from '../api/pokemonApi'

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef(
    'https://pokeapi.co/api/v2/pokemon?limit=40'
  ).current

  const loadPokemons = async () => {
    const response = await pokemonApi.get(nextPageUrl)
    console.log(response.data)
  }

  useEffect(() => {
    loadPokemons()
  }, [])
}
