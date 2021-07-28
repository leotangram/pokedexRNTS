import React from 'react'
import { Image, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  const { simplePokemonList } = usePokemonPaginated()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <Text
        style={{
          ...globalStyles.globalMargin,
          ...globalStyles.title,
          top: top + 20
        }}
      >
        Pokedex
      </Text>
    </>
  )
}

export default HomeScreen
