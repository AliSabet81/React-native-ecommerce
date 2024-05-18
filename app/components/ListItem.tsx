import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { AppText } from "./AppText";
import { colors } from "../config/colors";

export const ListItem = ({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
