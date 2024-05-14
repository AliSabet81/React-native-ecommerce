import { Alert, Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppText } from "./app/components";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  StatusBar.currentHeight;
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
