import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

export default ListItem = function ({item}) {
 
  return (
    <View style={styles.viewD}>
        <Text style={styles.Title}>Name: {item.name}</Text>
        <Text style={styles.Title}>Email: {item.email}</Text>
        <Text style={styles.comment}>Comment: {item.body}</Text>
    </View>
      
      

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    viewD:{
        // flex:1,
        // padding: 10,
        backgroundColor: "#f7e5ff",
        margin: 10,
        elevation: 5
      
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
        color: 'black'
        // fontStyle: 'italic'
      
      
      }
});
