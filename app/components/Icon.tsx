import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof MaterialCommunityIcons>;
export type IconName = Props["name"];

export const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}: {
  name: IconName;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
};
