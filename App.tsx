import { StyleSheet } from "react-native";
import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
