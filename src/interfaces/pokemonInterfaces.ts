export interface PokemonPaginatedResponse {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

export interface SimplePokemon {
  color?: string
  id: string
  name: string
  picture: string
}
