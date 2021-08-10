import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigation'

interface PokemonScreenProps
  extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen: FC<PokemonScreenProps> = ({ navigation, route }) => {
  const { simplePokemon, color } = route.params

  return (
    <View>
      <Text style={{ color }}>
        {simplePokemon.name} - {color}
      </Text>
    </View>
  )
}

export default PokemonScreen
