import React from "react";
import * as Icon from "phosphor-react-native";
import { Image } from "react-native";
import * as Styles from "./styles";

export function LastMatchCard({ data }: any) {
  return (
    <Styles.Container>
      <Styles.LeftContainer>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: data?.time_mandante?.escudo }}
          resizeMode="contain"
        />
      </Styles.LeftContainer>
      <Styles.CenterContainer>
        <Styles.DayContainer>
          <Icon.CalendarBlank weight="bold" size={20} color="#2B2B2B" />
          <Styles.Day>{data?.data?.substring(0, 5)}</Styles.Day>
        </Styles.DayContainer>

        <Styles.ResultContainer>
          <Styles.ResultText>{`${data?.placar.substring(
            0,
            1
          )} - ${data?.placar.substring(2, 3)}`}</Styles.ResultText>
        </Styles.ResultContainer>

        <Styles.Championship>{data?.campeonato}</Styles.Championship>
      </Styles.CenterContainer>
      <Styles.RightContainer>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: data?.time_visitante?.escudo }}
          resizeMode="contain"
        />
      </Styles.RightContainer>
    </Styles.Container>
  );
}
