import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> Yapılacaklar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
