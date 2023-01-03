import {React, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default Login = function ({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr]=useState("");

  const loginData= async()=>{
    if(email!="" && password!=""){
      setErr("");
      try{
        const jsonValue = await AsyncStorage.getItem('@email');
        if(jsonValue!=null){
          setErr('')
          setErr('')
          const obj = JSON.parse(jsonValue);
          if(obj.pass == password && obj.email == email){
            navigation.navigate('view');
          }
          else{
            setErr('Check Email and Password again')
          }
        }
        else{
          setErr('Check Email and Password again')
        }

      }
      catch(e){
        console.log(e);
      }
    }
    else{
      setErr("Email or password incomplete or wrong.")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
    <View styles ={styles.head}><Text style={styles.headText}>Login</Text></View>
      
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder='Email'/>
      <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder='Password'/>
      <Text style={styles.err}>{err}</Text>
      <TouchableOpacity style={styles.button} onPress={loginData}>
        <Text style={styles.buttonText}>login</Text>
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
