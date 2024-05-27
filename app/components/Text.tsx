import React from "react";
import { Text, TextProps } from "react-native";

import { styles as defaultStyles } from "../config/styles";

export const AppText = ({ children, style, ...otherProps }: TextProps) => {
  return (
    <Text {...otherProps} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};
