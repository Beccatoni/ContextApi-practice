import React, {useContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import About from '../screens/About';
import Home from '../screens/Home';
import SignUp from '../screens/Register';
import ContextApi, {AppContext} from '../global/contextApi';


const Stack = createNativeStackNavigator();



export const StackNavigation = () => {

const {isLog} = useContext(AppContext);

    return(
       
        <Stack.Navigator initialRouteName='Register'>
        { isLog ?
        (
          <>
            
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="About" component={About} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />

          </>
        ) : (
          <>
        <Stack.Screen name="Register" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          </>
        ) }
        
        
      </Stack.Navigator> 
    )
}