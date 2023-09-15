import React from "react";
import * as Icon from "phosphor-react-native";
import { Image } from "react-native";
import * as Styles from "./styles";

export function NextMatchCard({ data }: any) {
  return (
    <Styles.Container>
      <Styles.LeftContainer>
        <Image
          source={{ uri: data?.time_mandante?.escudo }}
          resizeMode="contain"
          style={{ width: 50, height: 50 }}
        />
      </Styles.LeftContainer>
      <Styles.CenterContainer>
        <Styles.DayContainer>
          <Icon.CalendarBlank weight="bold" size={20} color="#2B2B2B" />
          <Styles.Day>{data?.data}</Styles.Day>
        </Styles.DayContainer>

        <Styles.HourContainer>
          <Icon.Clock size={20} color="#2B2B2B" weight="fill" />
          <Styles.Hour>{data?.horario}</Styles.Hour>
        </Styles.HourContainer>

        <Styles.StadiumContainer>
          <Icon.HouseSimple size={20} color="#2B2B2B" />
          <Styles.StadiumText>
            {data?.estadio ?? "FALTA ISSO KAUÃ E OS ICONES E A TABELA"}
          </Styles.StadiumText>
        </Styles.StadiumContainer>

        <Styles.Championship>{data?.campeonato}</Styles.Championship>
      </Styles.CenterContainer>
      <Styles.RightContainer>
        <Image
          source={{ uri: data?.time_visitante?.escudo }}
          resizeMode="contain"
          style={{ width: 50, height: 50 }}
        />
      </Styles.RightContainer>
    </Styles.Container>
  );
}
