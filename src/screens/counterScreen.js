import React,{useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const counterScreen = () => {
    const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
        //   counter++;
            setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
            setCounter(counter - 1);
        }}
      />
      <Text>current count: {counter}</Text>
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
export default counterScreen;
