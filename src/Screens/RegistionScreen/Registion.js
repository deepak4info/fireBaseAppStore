import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';


const Registion = () => {

const [email, setEmail] = useState('');
const [username,setUsername] = useState('')
const [password,setPassword]= useState('');
const [rpassword,setRpassword]= useState('');
const [phone, setPhone] = useState('')
  
// const savaData =()=>{ 
//   firestore()
//   .collection('Usersdata')
//   .add({
//     email: email,
//     password: password,
//   })
//   .then(() => {
//     console.log('User added!');
//   });
// }

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
      <Text style={{alignSelf:'center', marginTop:30,fontSize:20, fontWeight:'800'}}>User Registion</Text>
    <TextInput 
    placeholder='Enter your Name'
    value={username}
    onChangeText={txt =>{
      setUsername(txt);
    }}
    style={{
      width:'80%',
      height:50,
      borderRadius:10,
      borderWidth:0.5,
      borderColor:'#000',
      alignSelf:'center',
      marginTop:50,
    }}
    />
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
      borderColor:'#000',
      alignSelf:'center',
      marginTop:30,
    }}
    />

<TextInput 
    placeholder='Enter phone'
    value={phone}
    onChangeText={txt =>{
      setPhone(txt);
    }}
    style={{
      width:'80%',
      height:50,
      borderRadius:10,
      borderWidth:0.5,
      borderColor:'#000',
      alignSelf:'center',
      marginTop:20,
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
      borderColor:'#000',
      alignSelf:'center',
      marginTop:20,
    }}
    />

<TextInput 
placeholder='RE-Enter Password'
value={rpassword}
onChangeText={txt =>{
  setRpassword(txt);
}}
    style={{
      width:'80%',
      height:50,
      borderRadius:10,
      borderWidth:0.5,
      borderColor:'#000',
      alignSelf:'center',
      marginTop:20,
    }}
    />


    <TouchableOpacity
    style={{width:'80%', height:50, backgroundColor:'orange', borderRadius:10, marginTop:30, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
    onPress={()=>{
      savaData();
    }}
    >
      <Text style={{fontSize:20,color:'#000'}}>Registion </Text>
    </TouchableOpacity>

    </View>
  )
}

export default Registion

const styles = StyleSheet.create({})