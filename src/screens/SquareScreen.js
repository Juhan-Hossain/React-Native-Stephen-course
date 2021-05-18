import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const color_increment = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  //   console.log(red);
  const setColor = (color, change) => {
    //color==='red','green','blue'
    //change===+15,-15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", color_increment)}
        onDecrease={() => setColor("red", -1 * color_increment)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('blue' ,color_increment)}
        onDecrease={() => setColor('blue' ,-1* color_increment)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor('green' , color_increment)}
        onDecrease={() => setColor(green ,-1* color_increment)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
