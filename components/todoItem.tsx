import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  CheckBox,
} from "react-native";

export default function TodoItem({ item, pressHandler, toggle }: any) {
  
  return (
    <TouchableOpacity style={item.status ? styles.container : styles.containerDone}>
      <View style={styles.item}>
        <CheckBox value={item.status} onValueChange={() => toggle(item.key)} />
        <Text style={item.status ? styles.textLine : styles.text}>{item.text}</Text>
      </View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Image source={require("../assets/trash.png")} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 15,
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  containerDone: {
    padding: 25,
    marginTop: 16,
    borderColor: "#3E5D33",
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
  },
  text: {
    marginTop: 5,
    fontWeight: "bold",
  },
  textLine: {
    marginTop: 5,
    textDecorationLine: "line-through",
    color: "#777",
  },
});
