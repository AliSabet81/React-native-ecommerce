import React from "react";
import { Text, TextStyle } from "react-native";

export const AppText = ({
  children,
  style,
}: {
  children: any;
  style?: TextStyle;
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
