import React from "react";
import { Icon, ListItem, ListItemSeprator, Screen } from "../components";
import { FlatList, StyleSheet, View } from "react-native";
import { colors } from "../config/colors";
import { IconName } from "../types";

const menuItem: {
  title: string;
  icon: { name: IconName; background: string };
}[] = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      background: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      background: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ali Sabet 2"
          subTitle="hello"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.background}
                />
              }
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeprator />}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.light },
  container: {
    marginVertical: 20,
    minHeight: 100,
  },
});

export default AccountScreen;
