import React, { FC } from 'react'
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FadeInImage from '../components/FadeInImage'
import { usePokemon } from '../hooks/usePokemon'

interface PokemonScreenProps
  extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen: FC<PokemonScreenProps> = ({ navigation, route }) => {
  const { simplePokemon, color } = route.params
  const { id, name, picture } = simplePokemon
  const { top } = useSafeAreaInsets()
  const { isLoading, pokemon } = usePokemon(id)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.pop()}
          style={{ ...styles.backButton, top: top + 5 }}
        >
          <Icon color="#ffffff" name="arrow-back-outline" size={35} />
        </TouchableOpacity>
        <Text style={{ ...styles.pokemonName, top: top + 45 }}>
          {`${name}\n`}#{id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage style={styles.pokemonImage} uri={picture} />
      </View>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator color={color} size={50} />
      </View>
    </View>
  )
}

export default PokemonScreen

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    height: 370,
    zIndex: 9999
  },
  backButton: {
    left: 20,
    position: 'absolute'
  },
  pokemonName: {
    alignSelf: 'flex-start',
    color: '#ffffff',
    fontSize: 40,
    left: 20
  },
  pokeball: {
    bottom: -20,
    height: 250,
    opacity: 0.7,
    width: 250
  },
  pokemonImage: {
    bottom: -15,
    height: 250,
    position: 'absolute',
    width: 250
  },
  loadingIndicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
