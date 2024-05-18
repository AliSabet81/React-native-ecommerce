import React, { ReactNode } from "react";
import Constans from "expo-constants";
import {
  RegisteredStyle,
  SafeAreaView,
  StyleProp,
  StyleSheet,
} from "react-native";

export const Screen = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: { [key: string]: string };
}) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constans.statusBarHeight,
    flex: 1,
  },
});
