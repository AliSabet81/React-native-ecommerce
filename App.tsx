import { StyleSheet } from "react-native";
import React from "react";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
