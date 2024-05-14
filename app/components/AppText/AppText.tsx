import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

export const AppText = ({ children }: { children: any }) => {
  return <Text style={styles.text}>{children}</Text>;
};
