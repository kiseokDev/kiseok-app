import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
      <Link
        href={{
          pathname: "/details/[id]",
          params: { id: "bacon" },
        }}
      >
        View user details
      </Link>
      <Link
        href={{
          pathname: "/details/[id]",
          params: { id: "bacon" },
        }}
      ></Link>
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