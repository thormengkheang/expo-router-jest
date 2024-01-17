import { Stack } from "expo-router";
import React from "react";
import { Image } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => <LogoTitle />,
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          headerTitle: () => <LogoTitle />,
        }}
      />
    </Stack>
  );
}
