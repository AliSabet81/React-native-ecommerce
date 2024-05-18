import { StyleSheet, View } from "react-native";
import React from "react";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { Icon, ListItem, Screen } from "./app/components";

export default function App() {
  return (
    <Screen>
      <ListItem
        onPress={() => {}}
        title="My title"
        subTitle="My subtitle"
        ImageComponent={
          <Icon
            name="email"
            size={50}
            backgroundColor="red"
            iconColor="white"
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
