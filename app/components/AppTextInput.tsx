import React from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import { IconName } from "../types";

interface IAppTextInput extends TextInputProps {
  icon: IconName;
}

export const AppTextInput = ({ icon, ...otherProps }: IAppTextInput) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  icon: {
    marginRight: 10,
  },
});
