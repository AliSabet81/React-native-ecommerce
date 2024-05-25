import React from "react";
import { StyleSheet } from "react-native";
import { AppText } from "./AppText";
import { colors } from "../config/colors";

export const ErrorMessage = ({
  error,
  visible,
}: {
  error?: string;
  visible?: boolean;
}) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
