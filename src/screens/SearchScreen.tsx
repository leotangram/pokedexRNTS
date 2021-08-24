import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PokemonCard from '../components/PokemonCard'
import SearchInput from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { globalStyles } from '../theme/appTheme'

const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()

  if (isFetching)
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator color="grey" size={50} />
        <Text>Loading...</Text>
      </View>
    )

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? top : top + 10
      }}
    >
      <SearchInput />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.globalMargin,
              ...globalStyles.title,
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

const styles = StyleSheet.create({
  activityContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
