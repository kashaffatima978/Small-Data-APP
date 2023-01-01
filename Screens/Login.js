import {React, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default Login = function ({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginData= async()=>{
    try{
      data = await AsyncStorage.getItem('data');
      value = JSON.parse(data);
      if(email === data.email && password==data.password){
        navigation.navigate('Home');
      }
      else{
        alert('Wrong input');
      }
    }
    catch(err){
      alert(err);
    }
  }
  return (
    <SafeAreaView style={{flex:1}}>
    <View styles ={styles.head}><Text style={{ fontSize:40,
    fontStyle: 'bold', textAlign: 'center'}}>Login</Text></View>
      
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder='Email'/>
      <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder='Password'/>
      <TouchableOpacity style={styles.button} onPress={loginData}>
        <Text>login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  head:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 50
  },
  input:{
    margin: 5,
    borderWidth: 1,
    padding: 5
  },
  button:{
    width: 100,
    backgroundColor: 'lightblue',
    alignSelf: 'center',
    padding: 15,
    textAlign: 'center',
    borderRadius: 15,
  }
});
