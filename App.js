import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function App() {
  console.log("Hello World")
  const message = 'hello world'
  return (
    <SafeAreaView>
      <View style={ {backgroundColor: 'pink'} }>
        <Text>{message}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
