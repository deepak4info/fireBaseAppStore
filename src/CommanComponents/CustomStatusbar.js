import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'

const CustomStatusbar = ({bg,content}) => {
  return <StatusBar backgroundColor={bg} barStyle={content} />
}

export default CustomStatusbar

const styles = StyleSheet.create({})