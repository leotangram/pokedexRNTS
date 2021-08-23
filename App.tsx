import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigation from './src/navigation/TabsNavigation'
// import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <TabsNavigation />
    </NavigationContainer>
  )
}

export default App
