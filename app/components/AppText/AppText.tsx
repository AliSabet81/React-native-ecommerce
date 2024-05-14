import React from "react";
import { Text, TextStyle } from "react-native";
import { styles } from "./styles";

export const AppText = ({
  children,
  style,
}: {
  children: any;
  style?: TextStyle;
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
