import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import Counter from "./src/screens/counterScreen";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HI THERE!!!</Text>
      <Button
        title="Go TO Counter DEMO"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go TO List DEMO"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go TO Image DEMO"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Go TO Component DEMO"
        onPress={() => {
          navigation.navigate("Component");
        }}
      />
      <Button
        title="Go TO Color DEMO"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Go TO Square DEMO"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
