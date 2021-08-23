import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNavigation from './StackNavigation'
import SearchScreen from '../screens/SearchScreen'

const Tab = createBottomTabNavigator()

const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StackNavigation" component={StackNavigation} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  )
}

export default TabsNavigation
