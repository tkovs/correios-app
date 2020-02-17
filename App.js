import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.body}>
      <Text style={styles.text}>Tracking</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
});

export default App;
