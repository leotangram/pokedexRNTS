import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import FadeInImage from './FadeInImage'

interface PokemonDetailsProps {
  pokemon: PokemonFull
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}
    >
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
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>{pokemon.weight} lb</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          style={styles.basicSprite}
          uri={pokemon.sprites.front_default}
        />
        <FadeInImage
          style={styles.basicSprite}
          uri={pokemon.sprites.back_default}
        />
        <FadeInImage
          style={styles.basicSprite}
          uri={pokemon.sprites.front_shiny}
        />
        <FadeInImage
          style={styles.basicSprite}
          uri={pokemon.sprites.back_shiny}
        />
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Base abilities</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities.map(({ ability }) => (
            <Text
              key={ability.name}
              style={{ ...styles.regularText, marginRight: 10 }}
            >
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Moves</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {pokemon.moves.map(({ move }) => (
            <Text
              key={move.name}
              style={{ ...styles.regularText, marginRight: 10 }}
            >
              {move.name}
            </Text>
          ))}
        </View>
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
    fontWeight: 'bold',
    marginTop: 20
  },
  regularText: {
    fontSize: 19
  },
  basicSprite: {
    height: 100,
    width: 100
  }
})
