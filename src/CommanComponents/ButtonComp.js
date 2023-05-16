import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComp = ({w,h,bg,text,color,r,onClick}) => {
  return (
    <TouchableOpacity 
    style={{
        width:w,
        height:h,
        backgroundColor:bg,
        borderRadius:r,
        justifyContent:'center',
        alignItems:'center',
    }}
    onPress={()=>{
        onClick();
    }}
    >
      <Text style={{color}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({})