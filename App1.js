import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App1 = () => {
  const [bgColor, setBgColor] = useState('green');

  const colors = ['green','blue','brown','yellow','red','black'];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}> 
      <Text style={styles.text}>{bgColor.toUpperCase()}</Text>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => setBgColor(color)}
        >
          <Text style={styles.buttonText}>{color.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    marginVertical: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App1;
