import React, { ReactNode } from "react";
import Constans from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

export const Screen = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constans.statusBarHeight,
  },
});
