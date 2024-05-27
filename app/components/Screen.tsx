import React, { ReactNode } from "react";
import Constans from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

export const Screen = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: { [key: string]: string | number };
}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constans.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
