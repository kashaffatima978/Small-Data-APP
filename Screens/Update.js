import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default Update = function ({navigation}) {
 
  return (
    <SafeAreaView style={{flex:1}}>
    <View styles ={styles.head}><Text style={{ fontSize:40,
    fontStyle: 'bold', textAlign: 'center'}}>Update daata </Text></View>
      
      

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  head:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 50
  }
});
