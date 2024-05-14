import { Alert, Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppText } from "./app/components";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import React from "react";
import { Card } from "./app/components/Card/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  StatusBar.currentHeight;
  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
