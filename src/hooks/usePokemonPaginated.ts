import { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import { Result } from '../interfaces/pokemonInterfaces'
import {
  PokemonPaginatedResponse,
  SimplePokemon
} from '../interfaces/pokemonInterfaces'

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  )

  const loadPokemons = async () => {
    const response = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current
    )
    nextPageUrl.current = response.data.next
    mapPokemonsToSimplePokemons(response.data.results)
  }

  const mapPokemonsToSimplePokemons = (pokemons: Result[]) => {
    pokemons.forEach(pokemon => console.log(pokemon.name))
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return {
    simplePokemonList
  }
}
