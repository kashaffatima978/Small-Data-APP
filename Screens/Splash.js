import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default Splash = function ({navigation}) {
 
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#98A4B0'}}>
      <Image style={styles.image} resizeMode='contain' source={require("../assets/data.png")}/>
      <Text style={styles.text}>Lets play with data!</Text>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image:{
    justifyContent: 'center',
    width: '80%',
    height: '90%',
    alignSelf: 'center'
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  }
});
