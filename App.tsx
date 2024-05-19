import { StyleSheet, View } from "react-native";
import React from "react";
import { AppTextInput, Screen } from "./app/components";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon={"email"} placeholder="UserName" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
