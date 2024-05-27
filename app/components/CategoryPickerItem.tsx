import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AppText, Icon } from ".";
import { IconName } from "../types";

export interface ICategoryPickerItem {
  onPress: (event: GestureResponderEvent) => void;
  item: { icon?: IconName; backgroundColor?: string; label: string };
}

export const CategoryPickerItem = ({ onPress, item }: ICategoryPickerItem) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {item.icon && (
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      )}
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
