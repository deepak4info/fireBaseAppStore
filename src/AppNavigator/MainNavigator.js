import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/SplashScreens/Splash';
import Login from '../Screens/LoginScreen/Login';
import Registion from '../Screens/RegistionScreen/Registion';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';


const Stack = createNativeStackNavigator();


function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Registion" component={Registion}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator

const styles = StyleSheet.create({})