import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import { RootStackParams } from './StackNavigation'
import PokemonScreen from '../screens/PokemonScreen'

const Tab2 = createStackNavigator<RootStackParams>()

const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff'
        },
        headerShown: false
      }}
    >
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab2.Navigator>
  )
}

export default Tab2Screen