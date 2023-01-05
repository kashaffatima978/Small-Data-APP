import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native';

export default ViewScreen = function ({navigation}) {
  const [data, setData] = useState([]);
  const [count, setCount] =useState(0);
  const [loading, setLoading] = useState(true);
 useEffect(()=>{
  if(count==0){
    try{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      setLoading(false);
      // console.log(json)
    })
  }
  catch(err){
    console.log(err);
  }

    setCount(1);
  }
 },[count, data])


  const nextPage =(id)=>{
    navigation.navigate('update',{id: id})
  }
  
  
  const show=({item})=>{
    return(
      <TouchableOpacity style={styles.main} onPress={()=>{nextPage(item.id)}}>
        <View style={styles.viewD}>
          <View style={styles.con1}>
            <Text style={{fontSize: 30}}>{item.id}</Text>
          </View>
          <View style={styles.con2}>
            <Text style={styles.Title}>Name: {item.name}</Text>
            <Text style={styles.Title}>Email: {item.email}</Text>
            <Text style={styles.comment}><Text style={{fontWeight:'bold'}}>Comment:</Text> {item.body}</Text>
          </View>
        </View>
      </TouchableOpacity>
        
    )
  }
  return (

    <SafeAreaView style={styles.container}>
      <View styles ={styles.head}><Text style={styles.headText}>Comments </Text></View>
        {!loading?
        <FlatList 
          style={styles.scroll}
          data={data} 
          renderItem={show} 
          keyExtractor={item => item.id}/>:null}


      <TouchableOpacity style={styles.addButton}
          onPress={()=>{
              navigation.navigate("add");
          }}>
              <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    
      
  </SafeAreaView>

  );
};
const styles = StyleSheet.create({

container:{
    flex:1,
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
scroll:{
  // flex:1,
  backgroundColor:'lightgrey'
},
viewD:{
  // flex:1,
  padding: 10,
  backgroundColor: "#f7e5ff",
  margin: 10,
  elevation: 5,
  flex:1,
  flexDirection: 'row'

},
Title:{
  padding: 5,
  // flex:1,
  fontWeight: 'bold',
  fontSize: 15
},
comment:{
  backgroundColor: '#fcf5ff',
  padding: 5,
  fontSize: 15,
  color: 'black',
  width: 250,
  height: 100,
  textAlignVertical: 'center'
},
con1:{
  flex: 0.2
},
con2:{
  flex: 0.8
},
addButton:{
  position:"absolute",  
  bottom:"5%",
  right:"4%",
  borderRadius:100,
  backgroundColor:"purple",
  width:"20%",
  height:"10%",
  justifyContent:"center",
  alignItems:"center",
},
addButtonText:{
  fontSize:40,
  fontWeight:"bold",
  color:"#212529"
}
});
