import React from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AppText } from "./AppText";
import { colors } from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}: {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  renderRightActions: any;
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
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
