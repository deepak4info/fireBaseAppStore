import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React,{useEffect,useState} from 'react'
import { THEME_COLOR1, THEME_COLOR2, THEME_COLOR3, THEME_COLOR4, WHITE } from '../../Utills/Color';
import { APP_Name } from '../../Utills/Strings';
import CustomStatusbar from '../../CommanComponents/CustomStatusbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(()=> {
    setTimeout(()=> {
      CheckUserisNew();
    },2000)
  }, []);

    const CheckUserisNew = async ()=> {
      const isUserNew = await AsyncStorage.getItem('Is_User_NEW');
      if(isUserNew!=null) 
      {
  navigation.navigate('Login');
      }
      else {
  navigation.navigate('WelcomeScreen');
      }
      console.log('check it',isUserNew);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: THEME_COLOR1 }}>
    <CustomStatusbar bg={THEME_COLOR1} content={'light-content'} />
        <View style={styles.logoView}>
            <Text style={styles.logo}>{APP_Name}</Text>
        </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  logo: {
    fontSize: 40,
    color: WHITE,
    fontWeight: '700',
},
logoView: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center'
}
})