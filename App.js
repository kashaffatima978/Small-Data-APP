import React,{useState, useEffect} from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './Screens/Login';
import Register from './Screens/Register';
import Add from './Screens/Add';
import ViewScreen from './Screens/ViewScreen';
import Update from './Screens/Update';
import Delete from './Screens/Delete';
import Splash from './Screens/Splash';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const isLightMode = useColorScheme()==='light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [showSplash, setShowSplash]= useState(true);
   
  useEffect(()=>{
    setTimeout(()=>{
      setShowSplash(false)
    }, 4000)
   },[])

  return (
    <NavigationContainer style={backgroundStyle} >
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown: false}}>
        {showSplash?<Stack.Screen name="splash" component={Splash} />:null}
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="add" component={Add} />
        <Stack.Screen name="view" component={ViewScreen} />
        <Stack.Screen name="delete" component={Delete} />
        <Stack.Screen name="update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
