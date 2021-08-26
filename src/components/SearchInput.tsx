import React, { useEffect, useState } from 'react'
import { FC } from 'react'
import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebounceValue } from '../hooks/useDebouncedValue'

interface SearchInputProps {
  onDebounce: (value: string) => void
  style?: StyleProp<ViewStyle>
}

const SearchInput: FC<SearchInputProps> = ({ onDebounce, style }) => {
  const [textValue, setTextValue] = useState('')

  const debouncedValue = useDebounceValue(textValue)

  useEffect(() => {
    onDebounce(debouncedValue)
  }, [debouncedValue])

  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <View style={styles.textBackground}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search pokémon"
          style={{ ...styles.textInput, top: Platform.OS === 'ios' ? 0 : 2 }}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon color="grey" name="search-outline" size={30} />
      </View>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    alignItems: 'center',
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    top: 2
  }
})
