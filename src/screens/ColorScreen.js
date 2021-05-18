import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          // copies colors & random rgb into the new array
          setColors([...colors, randomRgb()]);
        }}
      />
      {/* //rendering color items */}
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item}
        data={colors}
        renderItem={({ item }) => {
          // render items as a list
          return (
          <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: item
        }}
      />)
        }}
      />
      
    </View>
  );
};
const randomRgb = () => {
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255 + 1);
  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({});

export default ColorScreen;
