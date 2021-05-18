import React from "react";
import { Text, StyleSheet, View } from "react-native";

const componentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is component Screen!</Text>
      <Text>HELLO!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default componentScreen;
