import styled from "styled-components/native";
import { theme } from "../../../styles/theme";

export const Container = styled.View`
  padding: 16px;
  background-color: #fff;
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const LeftContainer = styled.View``;

export const CenterContainer = styled.View``;

export const DayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  font-family: ${theme.fonts.primary600};
  color: #2b2b2b;
`;

export const HourContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const Hour = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  font-family: ${theme.fonts.primary600};
  color: #2b2b2b;
`;

export const StadiumContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const StadiumText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.primary400};
  margin-left: 8px;
  color: #2b2b2b;
`;

export const Championship = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.primary400};
  text-align: center;
  margin: 8px 0;
  color: #2b2b2b;
`;

export const RightContainer = styled.View``;
