import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  //   const greetings = "Hello there! this is Image Screen";
  return (
    <View>
      {/* <Text style={styles.textStyle}>Getting started with react native!</Text> */}
      {/* <Text style={styles.subHeaderStyle}>{greetings}</Text> */}
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/rainpic.jpeg")}
        score={9}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/rain.jpg")}
        score={10}
      />
      <ImageDetails
        title="Rain"
        imageSource={require("../../assets/rain.jpg")}
        score={11}
      />
      <ImageDetails
        title="Creek"
        imageSource={require("../../assets/rain.jpg")}
        score={12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});
export default ImageScreen;
