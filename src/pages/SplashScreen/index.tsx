import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/icons/index';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>MoneyTracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02CF8E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
