import React,{useState, useEffect, useDeferredValue} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default Update = function ({navigation, route}) {
  const [data, setData] = useState({name:'', email:'', body:''});
  const [count, setCount] =useState(0);
  const [loading, setLoading] = useState(true);
  
  path = 'https://jsonplaceholder.typicode.com/comments/'.concat(route.params.id);
  
  useEffect(()=>{
    if(count==0){
      fetch(path)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        // console.log(json);
        
      });
      setCount(1);
    }
  },[count, data])

  const deleteObj =()=>{
    fetch(path, {
    method: 'DELETE',
    })
    .then((res)=>{
      if(res.status==200){
        alert('Object Deleted!');
      }
      
    })
 }

 const updateObj =()=>{
  fetch(path, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
    alert(response.status)
  })
 }
  return (
    <SafeAreaView style={styles.container}>
    <View styles ={styles.head}><Text style={styles.headText}>Comment {route.params.id}</Text></View>
    {!loading?
    <View style={styles.smallCon}>

    <Text style={styles.label}>Name:</Text>
    <TextInput style={styles.input} value={data.name} onChangeText={e=> setData({...data, name: e})}/>

    <Text style={styles.label}>Email:</Text>
    <TextInput style={styles.input} value={data.email} onChangeText={e=> setData({...data, email: e})} />

    <Text style={styles.label}>Comment:</Text>
    <TextInput style={styles.input} value={data.body} onChangeText={e=> setData({...data, body: e})} multiline={true}/>
    </View>
    : null}
    
    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <TouchableOpacity style={styles.button} onPress={updateObj}>
      <Text style={styles.buttonText}>Update</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={deleteObj}>
      <Text style={styles.buttonText}>Delete</Text>
    </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
};
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
