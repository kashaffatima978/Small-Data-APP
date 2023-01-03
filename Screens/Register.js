import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Register = function ({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [conPass, setConPass] = useState('');
  const [err, setErr]=useState("");
  
  const Register = async ()=>{
    if((name.length>0) && (password.length>0) && (email.length>0) && (conPass.length>0)){
      if(password == conPass){
        setErr("");
        obj = {
          name: name,
          pass: password,
          email: email,
        }
        try {
          const jsonValue = JSON.stringify(obj)
          await AsyncStorage.setItem('@email', jsonValue)
          
        } catch (e) {
          console.log(e);
        }
        navigation.navigate("Login");
      }
      else{
        setErr("Both password doesnot match");
      }
    }
    else{
      setErr("Incomplete or wrong information")
    }
    
  }
  
  return (
    <SafeAreaView style={styles.container}>
    <View styles ={styles.head}><Text style={styles.headText}>Register</Text></View>
      
      <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='UserName'/>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder='Email'/>
      <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder='Password'/>
      <TextInput value={conPass} onChangeText={setConPass} style={styles.input} placeholder='Confirm password'/>
      <Text style={styles.err}>{err}</Text>
      <TouchableOpacity style={styles.button} onPress={Register}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-evenly',
    },
  head:{
    alignSelf: 'center'

  },
  headText:{
    fontSize: 35,
    textAlign: 'center',
    color: "#7261A3",
    fontWeight: 'bold'
  },
  input:{
    borderColor:"#7261A3",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10, 
    marginLeft: 10,
    marginRight: 10
  },
  button:{
    width: 130,
    backgroundColor: '#7261A3',
    alignSelf: 'center',
    padding: 15,
    textAlign: 'center',
    borderRadius: 20,
    marginTop: -40
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  err:{
    color: 'red',
    marginLeft: 20,
    textAlign: 'left',
    fontSize: 15,
    marginTop: -50
  }
});
