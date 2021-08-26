import React from 'react'
import { Dimensions, FlatList, Platform, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PokemonCard from '../components/PokemonCard'
import SearchInput from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { globalStyles } from '../theme/appTheme'
import Loading from '../components/Loading'

const screenWidth = Dimensions.get('window').width

const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()

  if (isFetching) return <Loading />

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20
      }}
    >
      <SearchInput
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? top : top + 30,
          width: screenWidth - 40,
          zIndex: 999
        }}
      />
      <FlatList
        data={simplePokemonList}
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
            Pokedex
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
