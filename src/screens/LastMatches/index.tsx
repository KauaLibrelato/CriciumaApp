import React, { useEffect, useState } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import axios from "axios";
import { ActivityIndicator, FlatList, View } from "react-native";
import * as Styles from "./styles";
import { LastMatchCard } from "../../components";
import { lastMatchesApiUrl } from "../../services";
import { ILastMatchesId } from "./utils/types";

export function LastMatches() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [lastMatches, setLastMatches] = useState<ILastMatchesId[]>([]);
  const [loading, setLoading] = useState(false);

  async function geLastMatchesData() {
    setLoading(true);
    axios
      .get(lastMatchesApiUrl)
      .then((res) => {
        setLastMatches(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    navigation.addListener("focus", () => geLastMatchesData());
  }, [navigation]);
  return (
    <Styles.Container>
      <Styles.Title>Últimos jogos</Styles.Title>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="small" color="#fff" />
        </View>
      ) : (
        <Styles.Content>
          <FlatList
            data={lastMatches}
            keyExtractor={(item: { id: any }) => item.id}
            renderItem={({ item }) => <LastMatchCard data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
          />
        </Styles.Content>
      )}
    </Styles.Container>
  );
}
