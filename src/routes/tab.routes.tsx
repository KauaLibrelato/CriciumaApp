/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, View } from "react-native";
import { Home, LastMatches, Table } from "../screens";
import { TabBar } from "../components/Others/TabBar";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: "",
        headerLeft: () => <View />,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#FACC15",
          height: Platform.OS === "ios" ? 20 : 0,
        },
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Screen
        component={LastMatches}
        name="LastMatches"
        options={{
          tabBarIcon: "lastMacthes" as any,
        }}
      />
      <Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: "home" as any,
        }}
      />
      <Screen
        component={Table}
        name="Table"
        options={{
          tabBarIcon: "table" as any,
        }}
      />
    </Navigator>
  );
}
