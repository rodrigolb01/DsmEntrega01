import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native';

export default function App() {
  const [clicks, setClicks] = useState(0);
  const onButtonClick = () => {
    setClicks(clicks + 1);
  }
  return (
    <View style={styles.container}>
      <Text>You clicked {clicks} times!</Text>
      <Button 
      onPress={onButtonClick}
      title="press me"></Button>
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
