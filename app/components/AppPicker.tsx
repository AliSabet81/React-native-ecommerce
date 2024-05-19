import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles as defaultStyles } from "../config/styles";
import { IconName } from "../types";
import { AppText } from "./AppText";

interface IAppTextInput extends TextInputProps {
  icon: IconName;
}

export const AppPicker = ({
  icon,
  placeholder,
  ...otherProps
}: IAppTextInput) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name={"chevron-down"}
        size={20}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  text: { flex: 1 },
  icon: {
    marginRight: 10,
  },
});
