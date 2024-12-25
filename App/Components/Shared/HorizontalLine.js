import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

const HorizontalLine = () => {
  return (
    <View style={{
        borderBottomWidth: 1,
        borderColor: Colors.grey1,
        margin: 5,
        marginBottom: 10,
        marginTop:10
        }}>
    </View>
  )
}

export default HorizontalLine

const styles = StyleSheet.create({})