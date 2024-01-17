import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Link href={{ pathname: "details", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
    </View>
  );
}
