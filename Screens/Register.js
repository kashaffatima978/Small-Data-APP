import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Register = function ({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [conPass, setConPass] = useState('');
  
  const Register = async ()=>{
    if(password === conPass){
      try{
      const obj = {
        "name": name,
        "password": password,
        "email": email,
      }
      await AsyncStorage.setItem('data', JSON.stringify(obj));
      alert('registered');
      navigation.navigate('Login');
      }
      catch(err){
        alert(err)
      }
      
    }
    else{
      alert('CHECK PASSWORDS.')
    }
    

    
  }
  
  
  return (
    <SafeAreaView style={{flex:1}}>
    <View styles ={styles.head}><Text style={{ fontSize:40,
    fontStyle: 'bold', textAlign: 'center'}}>Register</Text></View>
      
      <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='UserName'/>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder='Email'/>
      <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder='Password'/>
      <TextInput value={conPass} onChangeText={setConPass} style={styles.input} placeholder='Confirm password'/>
      <TouchableOpacity style={styles.button} onPress={Register}>
        <Text>Register</Text>
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
