import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(){
return (
    <View style={styles.container}>
      <Image source={require('/Users/daniil/Documents/Projects/mySiriusProject/app/assets/jingu.png')}
      style={{
        width: 200,
        height: 200,
        borderRadius: 200
      }}
      />
      <Text style={{
        fontSize: 40,
        color: 'black'
      }}>Daniel Malukhin</Text>
      <Image source={require('/Users/daniil/Documents/Projects/mySiriusProject/app/assets/apple.png')}
      style={{
        width: 200,
        height: 200,
        borderRadius: 200
      }}
      />
    </View>
  );
} 
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
