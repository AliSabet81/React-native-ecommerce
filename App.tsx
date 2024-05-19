import { StyleSheet, Switch, View } from "react-native";
import React, { useState } from "react";
import { AppPicker, AppTextInput, Screen } from "./app/components";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothings", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <AppPicker items={categories} icon={"apps"} placeholder="Category" />
      <AppTextInput icon={"email"} placeholder="Email" />
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
