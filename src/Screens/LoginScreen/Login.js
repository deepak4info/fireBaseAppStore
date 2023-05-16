import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();

const [email, setEmail] = useState('');
const [password,setPassword]= useState();
  
const savaData =()=>{ 
  firestore()
  .collection('Usersdata')
  .add({
    email: email,
    password: password,
  })
  .then(() => {
    console.log('User added!');
  });
}

// firestore()
//   .collection('Usersdata')
//   // Filter results
//   .where('email', '==', email)
//   .get()
//   .then(querySnapshot => {
// console.log(
// querySnapshot
// );
//     /* ... */
//   });
 

  return (
    <View style={{flex:1}}>
      <Text style={{alignSelf:'center', marginTop:100,fontSize:20, fontWeight:'800'}}>Login</Text>
    <TextInput 
    placeholder='Enter Email id'
    value={email}
    onChangeText={txt =>{
      setEmail(txt);
    }}
    style={{
      width:'80%',
      height:50,
      borderRadius:10,
      borderWidth:0.5,
      alignSelf:'center',
      marginTop:100,
    }}
    
    />

<TextInput 
placeholder='Enter Password'
value={password}
onChangeText={txt =>{
  setPassword(txt);
}}
    style={{
      width:'80%',
      height:50,
      borderRadius:10,
      borderWidth:0.5,
      alignSelf:'center',
      marginTop:10,
    }}
    />
    <TouchableOpacity
    style={{width:'80%', height:50, backgroundColor:'orange', borderRadius:10, marginTop:30, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
    onPress={()=>{
      savaData();
    }}
    >
      <Text style={{fontSize:20,color:'#000'}}>Login </Text>
    </TouchableOpacity>

      <TouchableOpacity
      style={{flex:0.25, flexDirection:'row',justifyContent:'center', alignItems:'center',}}
     onPress={()=>{
      navigation.navigate('Registion')
     }}
     > 
      <Text style={{fontSize:20,color:'#000'}}>Do you have no account</Text> 
      <Text style={{fontSize:20,color:'gray'}}> Registion</Text>
      </TouchableOpacity>
   

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})