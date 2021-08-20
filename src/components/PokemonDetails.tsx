import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces'

interface PokemonDetailsProps {
  pokemon: PokemonFull
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>
      <View style={{ ...styles.container, marginTop: 370 }}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <Text
              key={type.name}
              style={{ ...styles.regularText, marginRight: 10 }}
            >
              {type.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={{ ...styles.container, marginTop: 20 }}>
        <Text style={styles.title}>Sprites</Text>
      </View>
    </ScrollView>
  )
}

export default PokemonDetails

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  regularText: {
    fontSize: 19
  }
})
