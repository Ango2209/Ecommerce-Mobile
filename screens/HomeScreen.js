import { Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const HomeScreen = () => {
  return (
    <SafeAreaView style={{
      paddingTop:Platform.OS==="android"?40:0,
      flex:1,
      backgroundColor:"white",
    }}>
      
  <ScrollView>
    <View>
     <Pressable style={{flexDirection:"row",alignItems:"center",marginHorizontal:7,
      gap:10,backgroundColor:'white',borderRadius:3,height:38,
      flex:1}}>
      
      </Pressable>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput placeholder="Search Amazon.in"/>
      <Feather name="mic" size={24} color="black" />
    </View>
  </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
