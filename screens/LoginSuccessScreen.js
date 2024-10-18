// LoginSuccessScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginSuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Login Successful!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6ccff',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082',
  },
});

export default LoginSuccessScreen;
