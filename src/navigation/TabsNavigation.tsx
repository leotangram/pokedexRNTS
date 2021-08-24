import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import StackNavigation from './StackNavigation'
import SearchScreen from '../screens/SearchScreen'

const Tab = createBottomTabNavigator()

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#ffffff'
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10
        },
        tabBarActiveTintColor: '#5856d6',
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
          position: 'absolute'
        },
        headerShown: false
      }}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Icon color={color} name="list-outline" size={25} />
          )
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon color={color} name="search-outline" size={25} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabsNavigation
