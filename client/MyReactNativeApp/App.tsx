import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebaseConfig from './firebaseConfig';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    console.log("Firebase app initialized:", firebaseConfig.app.name);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>This is just a text from Pranet hjhjhj</Text>
      <StatusBar style="auto" />
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
