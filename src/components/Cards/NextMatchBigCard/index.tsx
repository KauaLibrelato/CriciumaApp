/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect } from "react";
import * as Icon from "phosphor-react-native";
import { Image } from "react-native";
import * as Styles from "./styles";

export function NextMatchBigCard({ data }: any) {
  function transformDate() {
    const date = String(data?.data).slice(0, 5);
    const hour = String(data?.horario);
    const [dateString, timeString] = [date, hour];
    const [hours, minutes] = timeString.split(":");
    const [day, month] = dateString.split("/");
    const year = new Date().getFullYear();
    const formattedMatchDay = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    const transformedMatchDay = new Date(formattedMatchDay);

    return transformedMatchDay;
  }

  function calculateTimeLeft() {
    const target = new Date(transformDate());
    const currentDate = new Date();

    const timeDifference = target.getTime() - currentDate.getTime();

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styles.Container>
      <Styles.DayContainer>
        <Icon.CalendarBlank weight="bold" size={24} color="#2B2B2B" />
        <Styles.Day>{data?.data}</Styles.Day>
      </Styles.DayContainer>

      <Styles.HourContainer>
        <Icon.Clock size={24} color="#2B2B2B" weight="fill" />
        <Styles.Hour>{data?.horario}</Styles.Hour>
      </Styles.HourContainer>

      <Styles.TimerContainer>
        <Styles.InsideTimerContainer>
          <Styles.Time>
            {timeLeft?.days.toString().padStart(2, "0")}
          </Styles.Time>
          <Styles.TimeDescription>Dias</Styles.TimeDescription>
        </Styles.InsideTimerContainer>

        <Styles.TwoPointsContainer>
          <Styles.TwoPoints>:</Styles.TwoPoints>
        </Styles.TwoPointsContainer>

        <Styles.InsideTimerContainer>
          <Styles.Time>
            {timeLeft?.hours.toString().padStart(2, "0")}
          </Styles.Time>
          <Styles.TimeDescription>Horas</Styles.TimeDescription>
        </Styles.InsideTimerContainer>

        <Styles.TwoPointsContainer>
          <Styles.TwoPoints>:</Styles.TwoPoints>
        </Styles.TwoPointsContainer>

        <Styles.InsideTimerContainer>
          <Styles.Time>
            {timeLeft?.minutes.toString().padStart(2, "0")}
          </Styles.Time>
          <Styles.TimeDescription>Minutos</Styles.TimeDescription>
        </Styles.InsideTimerContainer>

        <Styles.TwoPointsContainer>
          <Styles.TwoPoints>:</Styles.TwoPoints>
        </Styles.TwoPointsContainer>

        <Styles.InsideTimerContainer>
          <Styles.Time>
            {timeLeft?.seconds.toString().padStart(2, "0")}
          </Styles.Time>
          <Styles.TimeDescription>Segundos</Styles.TimeDescription>
        </Styles.InsideTimerContainer>
      </Styles.TimerContainer>

      <Styles.MatchInfos>
        <Styles.Teams>
          <Styles.LogosContainer>
            <Styles.TeamContainer>
              <Image
                source={{ uri: data?.time_mandante?.escudo }}
                resizeMode="contain"
                style={{ width: 70, height: 70 }}
              />
            </Styles.TeamContainer>

            <Styles.XContainer>
              <Icon.X size={32} weight="bold" />
            </Styles.XContainer>

            <Styles.TeamContainer>
              <Image
                source={{ uri: data?.time_visitante?.escudo }}
                resizeMode="contain"
                style={{ width: 70, height: 70 }}
              />
            </Styles.TeamContainer>
          </Styles.LogosContainer>

          <Styles.TeamText>
            {data?.time_mandante?.nome} X {data?.time_visitante?.nome}
          </Styles.TeamText>
        </Styles.Teams>

        <Styles.Championship>{data?.campeonato}</Styles.Championship>

        <Styles.StadiumContainer>
          <Icon.HouseSimple />
          <Styles.StadiumText>{data?.estadio}</Styles.StadiumText>
        </Styles.StadiumContainer>
      </Styles.MatchInfos>
    </Styles.Container>
  );
}
