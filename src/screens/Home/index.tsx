/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { ActivityIndicator, FlatList, View } from "react-native";
import * as Styles from "./styles";
import { NextMatchBigCard, NextMatchCard } from "../../components";
import { nextMatchesApiUrl } from "../../services";
import { INextMatchesId } from "./utils/types";

export function Home() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [loading, setLoading] = useState(false);
  const [nextMatches, setNextMatches] = useState<INextMatchesId[]>([]);

  async function getNextMatchesData() {
    setLoading(true);
    axios
      .get(nextMatchesApiUrl)
      .then((res) => {
        setNextMatches(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    navigation.addListener("focus", () => getNextMatchesData());
  }, [navigation]);

  return (
    <Styles.Container>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="small" color="#fff" />
        </View>
      ) : (
        <>
          <Styles.Header>
            <NextMatchBigCard data={nextMatches[0]} />
          </Styles.Header>
          <Styles.Content>
            <FlatList
              data={nextMatches.slice(1)}
              keyExtractor={(item: { id: any }) => item.id}
              renderItem={({ item }) => <NextMatchCard data={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 60 }}
            />
          </Styles.Content>
        </>
      )}
    </Styles.Container>
  );
}
