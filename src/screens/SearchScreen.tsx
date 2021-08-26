import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PokemonCard from '../components/PokemonCard'
import SearchInput from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { globalStyles } from '../theme/appTheme'
import Loading from '../components/Loading'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

const screenWidth = Dimensions.get('window').width

const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()
  const [term, setTerm] = useState('')
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

  useEffect(() => {
    if (term.length === 0) return setPokemonFiltered([])

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(term.toLowerCase())
        )
      )
    } else {
      const pokemonById = simplePokemonList.find(
        pokemon => Number(pokemon.id) === Number(term)
      )
      setPokemonFiltered(pokemonById ? [pokemonById] : [])
    }
  }, [term])

  if (isFetching) return <Loading />

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20
      }}
    >
      <SearchInput
        onDebounce={setTerm}
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? top : top + 30,
          width: screenWidth - 40,
          zIndex: 999
        }}
      />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.globalMargin,
              ...globalStyles.title,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
              paddingBottom: 10
            }}
          >
            {term}
          </Text>
        }
        numColumns={2}
        renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default SearchScreen
