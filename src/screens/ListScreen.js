import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
const listScreen = () => {
  const friends = [
    { name: "Friend #1", Age: 20 },
    { name: "Friend #2", Age: 21 },
    { name: "Friend #3", Age: 22 },
    { name: "Friend #4", Age: 23 },
    { name: "Friend #5", Age: 24 },
    { name: "Friend #6", Age: 25 },
    { name: "Friend #7", Age: 26 },
    { name: "Friend #8", Age: 27 },
    { name: "Friend #9", Age: 28 },
    { name: "Friend #10", Age: 29 },
  ];
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});
export default listScreen;
