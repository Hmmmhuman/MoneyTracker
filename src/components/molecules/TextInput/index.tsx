import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 8,
    padding: 10,
  },
});
