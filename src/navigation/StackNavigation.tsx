import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import PokemonScreen from '../screens/PokemonScreen'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

export type RootStackParams = {
  HomeScreen: undefined
  PokemonScreen: { simplePokemon: SimplePokemon; color: string }
}

const Stack = createStackNavigator<RootStackParams>()

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff'
        },
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation
