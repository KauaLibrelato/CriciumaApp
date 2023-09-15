/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as Icon from "phosphor-react-native";
import { Platform, View } from "react-native";
import * as Styles from "./styles";
import { ITabBar } from "./utils/types";

export function TabBar({ state, descriptors, navigation }: ITabBar) {
  return (
    <Styles.Container>
      <View
        style={{
          marginBottom: Platform.OS === "ios" ? 38 : 24,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          backgroundColor: "#fff",
          flexDirection: "row",
          borderRadius: 99,
          gap: 8,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3.8,
        }}
      >
        {state.routes.map(
          (route: { key: string | number; name: string }, index: any) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };
            return (
              <Styles.TabButton
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => onPress()}
                onLongPress={() => onLongPress()}
                activeOpacity={0.7}
              >
                <Styles.ButtonContainer>
                  <Styles.InsideButtonContainer isFocused={isFocused}>
                    {options.tabBarIcon === "home" ? (
                      <Icon.HouseSimple
                        size={24}
                        color={isFocused ? "#FACC15" : "#000"}
                      />
                    ) : options.tabBarIcon === "table" ? (
                      <Icon.Table
                        size={24}
                        color={isFocused ? "#FACC15" : "#000"}
                      />
                    ) : (
                      <Icon.SoccerBall
                        size={24}
                        color={isFocused ? "#FACC15" : "#000"}
                      />
                    )}
                  </Styles.InsideButtonContainer>
                </Styles.ButtonContainer>
              </Styles.TabButton>
            );
          }
        )}
      </View>
    </Styles.Container>
  );
}
