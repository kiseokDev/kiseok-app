import { View, StyleSheet, Text } from "react-native";

export default function AlarmScreen() {
  return (
    <View style={styles.container}>
      <Text>Alarm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});