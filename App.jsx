import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
        <Main></Main>
		<Hello>React-Native</Hello>
		<Hello style={{fontSize: 16}}>Small Font</Hello>
		<Text>Open up App.js to start working on your apps!</Text>
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
