import { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon
} from '../interfaces/pokemonInterfaces'

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  )
  const [isLoading, setIsLoading] = useState(true)

  const loadPokemons = async () => {
    setIsLoading(true)
    try {
      const response = await pokemonApi.get<PokemonPaginatedResponse>(
        nextPageUrl.current
      )
      nextPageUrl.current = response.data.next
      mapPokemonsToSimplePokemons(response.data.results)
    } catch (error) {
      setIsLoading(false)
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

    setSimplePokemonList([...simplePokemonList, ...newPokemonList])
    setIsLoading(false)
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return {
    isLoading,
    simplePokemonList
  }
}
