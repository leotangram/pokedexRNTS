import React from 'react'
import { ActivityIndicator, FlatList, Image, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  const { loadPokemons, simplePokemonList } = usePokemonPaginated()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        ListFooterComponent={
          <ActivityIndicator color="grey" size={20} style={{ height: 100 }} />
        }
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        renderItem={({ item: { picture }, index }) => (
          <Image
            source={{ uri: picture }}
            style={{ height: 100, width: 100 }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      {/* <Text
        style={{
          ...globalStyles.globalMargin,
          ...globalStyles.title,
          top: top + 20
        }}
      >
        Pokedex
      </Text> */}
    </>
  )
}

export default HomeScreen
