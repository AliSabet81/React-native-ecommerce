import { Alert, Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppText } from "./app/components";

export default function App() {
  StatusBar.currentHeight;
  return (
    <View style={styles.container}>
      <Button onPress={() => Alert.alert("message")} title="hello" />
      <AppText>hello</AppText>
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5",
    justifyContent: "center",
    alignItems: "center",
  },
});
