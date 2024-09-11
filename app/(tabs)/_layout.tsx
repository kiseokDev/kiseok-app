import { Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen name="(home)" options={{ headerShown: false }} />
      <Tabs.Screen name="settings" options={{ headerShown: false }} />
      <Tabs.Screen name="alarm" options={{ headerShown: false }} />
    </Tabs>
  );
}
