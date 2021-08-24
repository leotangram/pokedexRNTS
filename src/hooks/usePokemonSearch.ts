import { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon
} from '../interfaces/pokemonInterfaces'

export const usePokemonSearch = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  )
  const [isFetching, setIsFetching] = useState(true)

  const loadPokemons = async () => {
    try {
      const response = await pokemonApi.get<PokemonPaginatedResponse>(
        'https://pokeapi.co/api/v2/pokemon?limit=1200'
      )
      mapPokemonsToSimplePokemons(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const mapPokemonsToSimplePokemons = (pokemons: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemons.map(({ name, url }) => {
      const urlParts = url.split('/')
      const id = urlParts[urlParts.length - 2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      return { name, id, picture }
    })

    setSimplePokemonList(newPokemonList)
    setIsFetching(false)
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return {
    isFetching,
    simplePokemonList
  }
}
