import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HeaderBack = ({ navigate, title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "rgb(216, 216, 216)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable style={{}} onPress={() => navigation.navigate(navigate)}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </Pressable>
      <View style={{ fontSize: "30px" }}>{title}</View>
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({});
