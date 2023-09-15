/* eslint-disable no-nested-ternary */
import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #facc15;
  padding-bottom: 50px;
`;

export const TableHeader = styled.View`
  flex-direction: row;
  background-color: #cbd5e1;
  justify-content: space-between;
  padding: 8px 0 8px 8px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const TableHeaderLeftContainer = styled.View``;

export const TableHeaderLeftText = styled.Text`
  color: #2b2b2b;
  font-size: 16px;
  font-family: ${theme.fonts.primary500};
`;

export const TableHeaderRightContainer = styled.View`
  flex-direction: row;
`;

export const TableHeaderRightText = styled.Text`
  color: #2b2b2b;
  margin-right: 12px;
  font-size: 16px;
  font-family: ${theme.fonts.primary500};
`;

export const TableRows = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 32px;
`;

export const TableRow = styled.View<{ borderBottomTrue?: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0 8px 8px;
  background-color: #f1f5f9;
  border-bottom-right-radius: ${(props: { borderBottomTrue?: boolean }) =>
    props?.borderBottomTrue ? 10 : 0}px;
  border-bottom-left-radius: ${(props: { borderBottomTrue?: boolean }) =>
    props?.borderBottomTrue ? 10 : 0}px;
`;

export const TableRowLeftContainer = styled.View`
  flex-direction: row;
`;

export const PositionContainer = styled.View<{ g4?: boolean; z4?: boolean }>`
  margin-right: 8px;
  border-right-width: ${(props: { g4: boolean; z4: boolean }) =>
    props?.g4 || props?.z4 ? 2 : 0}px;
  border-right-color: ${(props: { g4: boolean; z4: boolean }) =>
    props?.g4 ? "#20c634" : props?.z4 ? "#D5150B" : "transparent"};
  padding-right: 8px;
`;

export const Position = styled.Text`
  color: #2b2b2b;
  font-size: 16px;
  font-family: ${theme.fonts.primary500};
`;

export const TeamContainer = styled.View`
  width: 120px;
`;

export const Team = styled.Text`
  color: #2b2b2b;
  font-size: 15px;
  font-family: ${theme.fonts.primary500};
`;

export const TableRowRightContainer = styled.View`
  flex-direction: row;
`;
