import styled from "styled-components/native";
import { theme } from "../../../styles/theme";

export const Container = styled.View`
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
`;

export const DayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.Text`
  margin-left: 8px;
  font-size: 24px;
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
  font-size: 20px;
  font-family: ${theme.fonts.primary600};
  color: #2b2b2b;
`;

export const MatchInfos = styled.View``;

export const Teams = styled.View``;

export const LogosContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const TeamContainer = styled.View``;

export const XContainer = styled.View`
  margin: 0 16px;
`;

export const TeamText = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.primary700};
  text-align: center;
  color: #2b2b2b;
`;

export const Championship = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.primary400};
  text-align: center;
  margin: 8px 0;
  color: #2b2b2b;
`;

export const StadiumContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StadiumText = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.primary400};
  margin-left: 8px;
  color: #2b2b2b;
`;

export const TimerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const InsideTimerContainer = styled.View`
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.primary600};
  color: #2b2b2b;
`;

export const TimeDescription = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.primary400};
  color: #2b2b2b;
`;

export const TwoPointsContainer = styled.View`
  margin: 0 12px;
`;

export const TwoPoints = styled.Text`
  color: #2b2b2b;
  font-size: 16px;
  font-family: ${theme.fonts.primary400};
`;
