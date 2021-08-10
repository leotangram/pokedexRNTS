import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  const { loadPokemons, simplePokemonList } = usePokemonPaginated()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <View style={{ ...globalStyles.globalMargin, alignItems: 'center' }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          ListFooterComponent={
            <ActivityIndicator color="grey" size={20} style={{ height: 100 }} />
          }
          ListHeaderComponent={
            <Text
              style={{
                ...globalStyles.globalMargin,
                ...globalStyles.title,
                marginBottom: top + 20,
                paddingBottom: 10,
                top: top + 20
              }}
            >
              Pokedex
            </Text>
          }
          numColumns={2}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}

export default HomeScreen
