import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text>Square 1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Square 2</Text>
        </View>
        <View style={styles.box3}>
          <Text>Square 3</Text>
        </View>
      </View>
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
  boxContainer : {
    flex: 1,
    flexDirection : "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3db5ff",
    width: "20%",
    height: "10%"
  },
  box2: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ff3d71",
    width: "20%",
    height: "10%"
  },
  box1: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3dd8ff",
    width: "20%",
    height: "10%"
  }

});
