import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const onTextChange = (text) => {
    setName(text)
  }
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
      placeholder='What is your name?'
      value={name}
      onChangeText={onTextChange}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
