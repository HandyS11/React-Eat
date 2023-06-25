import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setPseudo } from "../../redux/actions/setPseudo";

export function SettingsScreen(){
  // @ts-ignore
  const pseudo = useSelector(state => state.appReducer.pseudo)
  const dispatch = useDispatch()

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Pseudo: {pseudo}</Text>
      <TextInput placeholder="Pseudo"
        style={styles.editor}
        defaultValue={pseudo}
        onChangeText={value => dispatch(setPseudo(value))}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  editor: {
    borderBottomWidth: 1,
    borderColor: "gray"
  }
})