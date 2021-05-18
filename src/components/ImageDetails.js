import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const ImageDetails = ({ title, imageSource,score }) => {
  // const greetings = "Hello there! this is Image Details";
  return (
    <View>
      <Image source = {imageSource} style={{height:100, width:100}} />
          <Text>{title}</Text>
          <Text>pic score- {score}</Text>
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
export default ImageDetails;
