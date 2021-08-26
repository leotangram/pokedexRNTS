import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator color="grey" size={50} />
      <Text>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  activityContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
