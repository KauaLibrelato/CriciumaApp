import { NavigationProp, ParamListBase } from "@react-navigation/native";

export type TNavigation = NavigationProp & ParamListBase;

export interface ITabBar {
  state: {
    index: number;
    routes: any;
  };
  descriptors: any;
  navigation: any;
}
