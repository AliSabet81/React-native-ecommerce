import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles as defaultStyles } from "../config/styles";
import { IconName } from "../types";

export interface IAppTextInput extends TextInputProps {
  icon?: IconName;
}

export const AppTextInput = ({ icon, ...otherProps }: IAppTextInput) => {
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
      <TextInput style={defaultStyles.text} {...otherProps} />
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

  icon: {
    marginRight: 10,
  },
});
