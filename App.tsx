/* eslint-disable camelcase */
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox, StatusBar } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Routes } from "./src/routes";
import { theme } from "./src/styles/theme";

LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen",
  "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
  "ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript. If you need to continue using ViewPropTypes, migrate to the 'deprecated-react-native-prop-types' package.",
]);
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlashMessage position="top" duration={1000} />
      <StatusBar barStyle="dark-content" backgroundColor="#FACC15" />
      <ThemeProvider theme={theme}>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
