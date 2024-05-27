import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "./AppText";
import { ICategoryPickerItem } from "./CategoryPickerItem";

export const PickerItem = ({ onPress, item }: ICategoryPickerItem) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
