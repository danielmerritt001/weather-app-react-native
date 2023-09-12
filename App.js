import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function App() {
  console.log("Hello World")
  const message = 'hello world'
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={ styles.container }>
        <Text>{message}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    
  },
});
