import React, { FC, useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ImageColors from 'react-native-image-colors'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import FadeInImage from './FadeInImage'

const windowWidth = Dimensions.get('window').width

interface PokemonCardProps {
  pokemon: SimplePokemon
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, picture } = pokemon

  const isMounted = useRef(true)
  const navigation = useNavigation()

  const [bgColor, setBgColor] = useState('grey')

  useEffect(() => {
    ImageColors.getColors(picture, {
      fallback: 'grey'
    }).then(colors => {
      if (!isMounted.current) return
      colors.platform === 'android'
        ? setBgColor(colors.dominant || 'grey')
        : setBgColor(colors.background || 'grey')
    })
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor
        })
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: bgColor,
          width: windowWidth * 0.4
        }}
      >
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
