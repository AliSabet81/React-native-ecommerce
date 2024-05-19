import React from "react";
import { Text, TextStyle } from "react-native";

import { styles as defaultStyles } from "../config/styles";

export const AppText = ({
  children,
  style,
}: {
  children: any;
  style?: TextStyle;
}) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};
