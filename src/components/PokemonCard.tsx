import React, { FC } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import FadeInImage from './FadeInImage'

// interface PokemonCardProps {
//   pokemon: SimplePokemon
// }

const windowWidth = Dimensions.get('window').width

const PokemonCard: FC<SimplePokemon> = ({ id, name, picture }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{ ...styles.cardContainer, width: windowWidth * 0.4 }}>
        <View>
          <Text style={styles.name}>
            {name} {`\n#${id}`}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    elevation: 5,
    height: 120,
    marginBottom: 25,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 160
  },
  name: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    left: 10,
    top: 20
  },
  pokeball: {
    bottom: -25,
    height: 100,
    position: 'absolute',
    right: -25,
    width: 100
  },
  pokemonImage: {
    bottom: -5,
    height: 120,
    position: 'absolute',
    right: -8,
    width: 120
  },
  pokeballContainer: {
    bottom: 0,
    height: 100,
    opacity: 0.5,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    width: 100
  }
})
