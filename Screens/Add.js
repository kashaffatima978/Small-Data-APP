import React,{useState, useEffect, useDeferredValue} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default Update = function ({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const post = ()=>{
    if(name.length>0 && email.length>0 && comment.length>0){
      obj = {name: name, email: email, comment: comment};
      console.log('helo')
      fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) =>{ 
      console.log(response.status);
      if(response.status==201){
        alert('comment posted!!');
      }
    })
    }
  
  else{
    alert('provide complete data');
  }

}

 
  return (
    <SafeAreaView style={styles.container}>
    <View styles ={styles.head}><Text style={styles.headText}>Add Comment</Text></View>

    <View style={styles.smallCon}>

    <Text style={styles.label}>Name:</Text>
    <TextInput style={styles.input} value={name} onChangeText={setName}/>

    <Text style={styles.label}>Email:</Text>
    <TextInput style={styles.input} value={email} onChangeText={setEmail}/>

    <Text style={styles.label}>Comment:</Text>
    <TextInput style={styles.input} value={comment} onChangeText={setComment} multiline={true}/>
    </View>

    
    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <TouchableOpacity style={styles.button} onPress={post}>
      <Text style={styles.buttonText}>post</Text>
    </TouchableOpacity>

    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    // borderWidth: 1,
    flex:1,
},
smallCon:{
  flex:1,
  justifyContent: 'center',
  padding:10,
  backgroundColor: 'lightpurple'
},
head:{
  flex:1,
  alignSelf: 'center',
  paddingBottom: 10,
},
headText:{
  fontSize: 35,
  textAlign: 'center',
  color: "#7261A3",
  fontWeight: 'bold'
},
button:{
  width: 130,
  backgroundColor: '#7261A3',
  alignSelf: 'center',
  padding: 15,
  textAlign: 'center',
  borderRadius: 20,

},
buttonText:{
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center'
},
label:{
  fontSize: 20,
  fontStyle: 'bold',
  marginBottom: 10,
  color: 'black'

},
input:{
  // width: '80%',
  // alignSelf: 'center',
  borderWidth: 1,
  marginBottom: 10,

}
});
