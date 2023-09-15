import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #facc15;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.primary600};
  margin: 14px 0 16px 0;
  color: #2b2b2b;
`;
