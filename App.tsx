import { Alert, Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppText } from "./app/components";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import React from "react";
import { Card } from "./app/components/Card/Card";

export default function App() {
  StatusBar.currentHeight;
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
