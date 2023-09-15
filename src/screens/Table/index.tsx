import React, { useEffect, useState } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import axios from "axios";
import * as Styles from "./styles";
import { tableUrl } from "../../services";
import { ITableInfosId } from "./utils/types";

export function Table() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [loading, setLoading] = useState(false);
  const [tableInfos, setTableInfos] = useState<ITableInfosId[]>([]);

  async function getTable() {
    setLoading(true);
    axios
      .get(tableUrl)
      .then((res) => {
        setTableInfos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    navigation.addListener("focus", () => getTable());
  }, [navigation]);
  return (
    <Styles.Container>
      <Styles.TableHeader>
        <Styles.TableHeaderLeftContainer>
          <Styles.TableHeaderLeftText>Classificação</Styles.TableHeaderLeftText>
        </Styles.TableHeaderLeftContainer>
        <Styles.TableHeaderRightContainer>
          <View style={{ marginRight: 9 }}>
            <Styles.TableHeaderRightText>PG</Styles.TableHeaderRightText>
          </View>

          <View style={{ marginRight: 10 }}>
            <Styles.TableHeaderRightText>J</Styles.TableHeaderRightText>
          </View>

          <View style={{ marginRight: 2 }}>
            <Styles.TableHeaderRightText>V</Styles.TableHeaderRightText>
          </View>

          <View style={{ marginRight: 0 }}>
            <Styles.TableHeaderRightText>E</Styles.TableHeaderRightText>
          </View>

          <View style={{ marginRight: 4 }}>
            <Styles.TableHeaderRightText>D</Styles.TableHeaderRightText>
          </View>

          <View>
            <Styles.TableHeaderRightText>SG</Styles.TableHeaderRightText>
          </View>
        </Styles.TableHeaderRightContainer>
      </Styles.TableHeader>

      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Styles.TableRows>
          {tableInfos?.map((el, index) => (
            <Styles.TableRow
              borderBottomTrue={index === Number(tableInfos?.length) - 1}
            >
              <Styles.TableRowLeftContainer>
                <Styles.PositionContainer g4={index <= 3} z4={index >= 16}>
                  <Styles.Position>{el?.posicao}°</Styles.Position>
                </Styles.PositionContainer>
                <Styles.TeamContainer>
                  <Styles.Team>{el?.time?.nome}</Styles.Team>
                </Styles.TeamContainer>
              </Styles.TableRowLeftContainer>
              <Styles.TableRowRightContainer>
                <Styles.TableHeaderRightText>
                  {el?.pontos}
                </Styles.TableHeaderRightText>

                <Styles.TableHeaderRightText>
                  {el?.jogos}
                </Styles.TableHeaderRightText>

                <Styles.TableHeaderRightText>
                  {el?.vitorias}
                </Styles.TableHeaderRightText>

                <Styles.TableHeaderRightText>
                  {el?.empates}
                </Styles.TableHeaderRightText>

                <Styles.TableHeaderRightText>
                  {el?.derrotas}
                </Styles.TableHeaderRightText>

                <Styles.TableHeaderRightText>
                  {el?.saldo_gols}
                </Styles.TableHeaderRightText>
              </Styles.TableRowRightContainer>
            </Styles.TableRow>
          ))}
        </Styles.TableRows>
      )}
    </Styles.Container>
  );
}
